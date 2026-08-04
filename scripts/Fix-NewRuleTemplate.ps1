$ErrorActionPreference = "Stop"

$file = ".\scripts\New-Rule.ps1"

if (!(Test-Path $file)) {

    Write-Host ""
    Write-Host "[ERROR] $file not found." -ForegroundColor Red
    Write-Host ""
    exit 1

}

$content = Get-Content $file -Raw

$old = 'workspace: WorkspaceState'
$new = '_workspace: WorkspaceState'

if ($content.Contains($old)) {

    $content = $content.Replace($old, $new)

    $utf8 = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText(
        (Resolve-Path $file),
        $content,
        $utf8
    )

    Write-Host ""
    Write-Host "[OK] New-Rule.ps1 template updated." -ForegroundColor Green
    Write-Host ""

}
else {

    Write-Host ""
    Write-Host "[INFO] Template already updated." -ForegroundColor Yellow
    Write-Host ""

}
