Set-StrictMode -Version Latest

. "$PSScriptRoot\PlatformCapabilities.ps1"

function Get-PlatformCapabilities {

    $cap = [PlatformCapabilities]::new()

    $cap.CpuCores = [Environment]::ProcessorCount

    $memory = Get-CimInstance Win32_ComputerSystem
    $cap.MemoryGB = [math]::Round($memory.TotalPhysicalMemory / 1GB,2)

    $disk = Get-PSDrive -Name C
    $cap.DiskFreeGB = [math]::Round($disk.Free / 1GB,2)

    if($cap.MemoryGB -ge 16 -and $cap.CpuCores -ge 8){
        $cap.PowerMode = "HIGH"
    }
    elseif($cap.MemoryGB -ge 8){
        $cap.PowerMode = "NORMAL"
    }
    else {
        $cap.PowerMode = "LOW"
    }

    return $cap

}
