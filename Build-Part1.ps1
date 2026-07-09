$ErrorActionPreference = "Stop"

Clear-Host

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "        ACKI-FAN Studio Builder" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/4] Checking Node.js..." -ForegroundColor Yellow

if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js is not installed." -ForegroundColor Red
    exit 1
}

Write-Host "Node Version: $(node -v)" -ForegroundColor Green

Write-Host ""
Write-Host "[2/4] Creating folders..." -ForegroundColor Yellow

$folders = @(
"docs",
"installer",
"scripts",

"src\renderer\src\assets",
"src\renderer\src\assets\icons",
"src\renderer\src\assets\logo",
"src\renderer\src\assets\images",

"src\renderer\src\components",
"src\renderer\src\components\layout",
"src\renderer\src\components\ui",
"src\renderer\src\components\dashboard",
"src\renderer\src\components\terminal",

"src\renderer\src\pages",
"src\renderer\src\pages\Dashboard",
"src\renderer\src\pages\Wallet",
"src\renderer\src\pages\Markets",
"src\renderer\src\pages\Dexdo",
"src\renderer\src\pages\AI",
"src\renderer\src\pages\Explorer",
"src\renderer\src\pages\Terminal",
"src\renderer\src\pages\Logs",
"src\renderer\src\pages\Settings",

"src\renderer\src\router",
"src\renderer\src\services",
"src\renderer\src\store",
"src\renderer\src\hooks",
"src\renderer\src\styles",
"src\renderer\src\types"
)

foreach($folder in $folders){
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

Write-Host "Folders created." -ForegroundColor Green

Write-Host ""
Write-Host "[3/4] Installing packages..." -ForegroundColor Yellow

npm install react-router-dom zustand lucide-react

Write-Host ""
Write-Host "[4/4] Finished." -ForegroundColor Green
Write-Host ""
Write-Host "ACKI-FAN Foundation Ready!" -ForegroundColor Cyan
