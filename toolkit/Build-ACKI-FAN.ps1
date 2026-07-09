$ErrorActionPreference = "Stop"

Clear-Host

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "        ACKI-FAN Studio Builder" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/3] Checking environment..." -ForegroundColor Yellow

foreach ($tool in @("node","git")) {
    if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) {
        throw "$tool is not installed."
    }
}

Write-Host "Node: $(node -v)"
Write-Host "Git : $(git --version)"

Write-Host ""
Write-Host "[2/3] Creating folders..." -ForegroundColor Yellow

$folders = @(
    "docs",
    "installer",
    "scripts",
    "src\renderer\src\components",
    "src\renderer\src\pages",
    "src\renderer\src\router",
    "src\renderer\src\store",
    "src\renderer\src\services",
    "src\renderer\src\styles"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

Write-Host "Folders ready." -ForegroundColor Green

Write-Host ""
Write-Host "[3/3] Builder initialized." -ForegroundColor Green
