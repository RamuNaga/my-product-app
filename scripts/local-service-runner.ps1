param(
  [ValidateSet('build','up','logs','status','stop')]
  [string]$Action,

  [ValidateSet('backend-product-service','user-grpc','company-grpc','company-location-grpc','workorder-service','api-gateway','bff','frontend','all')]
  [string]$Service = 'all',

  [int]$Parallel = 8,
  [int]$Tail = 120,
  [switch]$Follow
)

$ErrorActionPreference = 'Stop'

$Services = @(
  'backend-product-service',
  'user-grpc',
  'company-grpc',
  'company-location-grpc',
  'workorder-service',
  'api-gateway',
  'bff',
  'frontend'
)

$Targets = if ($Service -eq 'all') { $Services } else { @($Service) }
$LogDir = Join-Path (Get-Location) '.logs'
$PidDir = Join-Path $LogDir 'pids'
New-Item -ItemType Directory -Force -Path $LogDir, $PidDir | Out-Null

function Invoke-PnpmNx {
  param([string[]]$Arguments)
  Write-Host "pnpm nx $($Arguments -join ' ')" -ForegroundColor Cyan
  & pnpm nx @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "Nx command failed with exit code $LASTEXITCODE"
  }
}

function Start-LocalService {
  param([string]$Name)

  $stdout = Join-Path $LogDir "$Name.out.log"
  $stderr = Join-Path $LogDir "$Name.err.log"
  $pidFile = Join-Path $PidDir "$Name.pid"

  if (Test-Path $pidFile) {
    $existingPid = Get-Content $pidFile -ErrorAction SilentlyContinue
    if ($existingPid -and (Get-Process -Id $existingPid -ErrorAction SilentlyContinue)) {
      Write-Host "$Name is already running (PID $existingPid)" -ForegroundColor Yellow
      return
    }
  }

  Write-Host "Starting $Name locally..." -ForegroundColor Cyan
  $pnpmCommand = (Get-Command pnpm.cmd -ErrorAction Stop).Source
  $startArgs = @{
    FilePath = $pnpmCommand
    ArgumentList = @('nx','serve',$Name)
    RedirectStandardOutput = $stdout
    RedirectStandardError = $stderr
    PassThru = $true
    WindowStyle = 'Hidden'
  }
  $process = Start-Process @startArgs

  Set-Content -Path $pidFile -Value $process.Id
  Write-Host "$Name started (PID $($process.Id)); logs: $stdout" -ForegroundColor Green
}

function Stop-LocalService {
  param([string]$Name)

  $pidFile = Join-Path $PidDir "$Name.pid"
  if (-not (Test-Path $pidFile)) {
    Write-Host "$Name has no PID file" -ForegroundColor Yellow
    return
  }

  $servicePid = Get-Content $pidFile -ErrorAction SilentlyContinue
  if ($servicePid -and (Get-Process -Id $servicePid -ErrorAction SilentlyContinue)) {
    & taskkill.exe /PID $servicePid /T /F | Out-Null
    Write-Host "$Name stopped (PID $servicePid)" -ForegroundColor Green
  } else {
    Write-Host "$Name is not running" -ForegroundColor Yellow
  }
  Remove-Item $pidFile -Force -ErrorAction SilentlyContinue
}

switch ($Action) {
  'build' {
    if ($Service -eq 'all') {
      Invoke-PnpmNx (@('run-many','-t','build','-p') + $Services + @("--parallel=$Parallel"))
    } else {
      Invoke-PnpmNx @('run',"$Service`:build")
    }
  }

  'up' {
    foreach ($target in $Targets) { Start-LocalService $target }
  }

  'logs' {
    if ($Service -eq 'all') {
      Write-Host "Local logs are stored under $LogDir" -ForegroundColor Cyan
      foreach ($target in $Services) {
        $file = Join-Path $LogDir "$target.out.log"
        if (Test-Path $file) {
          Write-Host "`n===== $target =====" -ForegroundColor Cyan
          Get-Content $file -Tail $Tail
        }
      }
      if ($Follow) {
        Write-Host "-Follow is supported for one local service at a time." -ForegroundColor Yellow
      }
    } else {
      $file = Join-Path $LogDir "$Service.out.log"
      if (-not (Test-Path $file)) { throw "Log file not found: $file" }
      if ($Follow) { Get-Content $file -Tail $Tail -Wait } else { Get-Content $file -Tail $Tail }
    }
  }

  'status' {
    foreach ($target in $Targets) {
      $pidFile = Join-Path $PidDir "$target.pid"
      $state = 'Stopped'
      $servicePid = $null
      if (Test-Path $pidFile) {
        $servicePid = Get-Content $pidFile -ErrorAction SilentlyContinue
        if ($servicePid -and (Get-Process -Id $servicePid -ErrorAction SilentlyContinue)) {
          $state = 'Running'
        }
      }
      Write-Host ("{0,-30} {1,-10} {2}" -f $target, $state, $(if ($servicePid) { "PID $servicePid" } else { '' }))
    }
  }

  'stop' {
    foreach ($target in $Targets) { Stop-LocalService $target }
  }
}
