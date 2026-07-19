# ========================================
# ACKIOS Patch Core
# ========================================

$script:PatchStart = $null

function Initialize-Patch {

    param(
        [Parameter(Mandatory)]
        [string]$Name
    )

    $script:PatchStart = Get-Date

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host (" ACKIOS PATCH {0}" -f $Name) -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host ""

}

function Backup-File {

    param(
        [Parameter(Mandatory)]
        [string]$Path
    )

    $Backup = "$Path.bak_{0}" -f (Get-Date -Format "yyyyMMdd_HHmmss")

    Copy-Item $Path $Backup -Force

    Write-Host ("[ OK ] Backup: {0}" -f $Backup)

    return $Backup

}

function Read-File {

    param(
        [Parameter(Mandatory)]
        [string]$Path
    )

    return Get-Content $Path -Raw

}

function Write-File {

    param(

        [Parameter(Mandatory)]
        [string]$Path,

        [Parameter(Mandatory)]
        [string]$Content

    )

    $Utf8 = New-Object System.Text.UTF8Encoding($false)

    [System.IO.File]::WriteAllText(
        $Path,
        $Content,
        $Utf8
    )

    Write-Host ("[ OK ] Updated: {0}" -f $Path)

}

function Complete-Patch {

    $elapsed = (Get-Date) - $script:PatchStart

    Write-Host ""
    Write-Host ("Completed in {0:n1} sec." -f $elapsed.TotalSeconds)
    Write-Host ""

}

function Test-ContentContains {

    param(

        [Parameter(Mandatory)]
        [string]$Content,

        [Parameter(Mandatory)]
        [string]$Pattern

    )

    return $Content.Contains($Pattern)

}


function Add-ContentIfMissing {

    param(

        [Parameter(Mandatory)]
        [string]$Content,

        [Parameter(Mandatory)]
        [string]$Marker,

        [Parameter(Mandatory)]
        [string]$Block

    )

    if (Test-ContentContains `
            -Content $Content `
            -Pattern $Marker) {

        Write-Host "[ OK ] Block already exists."

        return $Content

    }

    Write-Host "[ OK ] Adding block..."

    return ($Content.TrimEnd() + "`r`n`r`n" + $Block)

}

