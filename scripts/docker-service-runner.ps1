param(
  [ValidateSet('build','up','logs','status','restart','deploy')]
  [string]$Action,

  [ValidateSet('backend-product-service','user-grpc','company-grpc','company-location-grpc','workorder-service','api-gateway','bff','frontend','all')]
  [string]$Service = 'all',

  [switch]$NoCache,
  [int]$Tail = 150,
  [switch]$Follow
)

$ErrorActionPreference = 'Stop'

$ComposeFile = 'docker-compose.dev.yml'
$EnvFile = '.env.docker'

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
$Base = @('compose', '--env-file', $EnvFile, '-f', $ComposeFile)

function Invoke-DockerCompose {
  param([string[]]$Arguments)
  Write-Host "docker $($Arguments -join ' ')" -ForegroundColor Cyan
  & docker @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "Docker command failed with exit code $LASTEXITCODE"
  }
}

switch ($Action) {
  'build' {
    $args = $Base + @('build')
    if ($NoCache) { $args += '--no-cache' }
    $args += $Targets
    Invoke-DockerCompose $args
  }

  'up' {
    Invoke-DockerCompose ($Base + @('up','-d') + $Targets)
  }

  'logs' {
    $args = $Base + @('logs',"--tail=$Tail")
    if ($Follow) { $args += '-f' }
    $args += $Targets
    Invoke-DockerCompose $args
  }

  'status' {
    Invoke-DockerCompose ($Base + @('ps'))
  }

  'restart' {
    Invoke-DockerCompose ($Base + @('restart') + $Targets)
  }

  'deploy' {
    $buildArgs = $Base + @('build')
    if ($NoCache) { $buildArgs += '--no-cache' }
    $buildArgs += $Targets
    Invoke-DockerCompose $buildArgs
    Invoke-DockerCompose ($Base + @('up','-d') + $Targets)
    Invoke-DockerCompose ($Base + @('logs',"--tail=$Tail") + $Targets)
  }
}
