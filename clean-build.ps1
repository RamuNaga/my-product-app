Write-Host "🧹 Cleaning project caches and build artifacts..."

# 1. Remove dist, node_modules, and caches
if (Test-Path dist) { Remove-Item -Recurse -Force dist }
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
Get-ChildItem -Path . -Recurse -Include *.tsbuildinfo | Remove-Item -Force

# 2. Reset Nx cache
pnpm nx reset

# 3. Reinstall dependencies
pnpm install

# 4. Regenerate GraphQL types
pnpm graphql-codegen

# 5. Run clean build
pnpm exec nx build frontend-data-access --skip-nx-cache --verbose
