# Script to move backend libs into libs/backend/ using Nx CLI

# Ensure dry run first before applying actual changes
$libs = @(
    "logger",
    "prisma",
    "product",
    "shared",
    "user"
)

foreach ($lib in $libs) {
    Write-Host "`n--- Dry Run: Moving $lib ---"
    nx g @nx/workspace:move --project $lib --destination libs/backend/$lib --dry-run
}

Write-Host "`nIf the dry run looks good, run the following to apply changes:"

foreach ($lib in $libs) {
    Write-Host "nx g @nx/workspace:move --project $lib --destination libs/backend/$lib"
}
