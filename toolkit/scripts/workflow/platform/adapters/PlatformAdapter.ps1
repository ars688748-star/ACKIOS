Set-StrictMode -Version Latest

class PlatformAdapter {

    [string]$Name

    PlatformAdapter([string]$Name){
        $this.Name = $Name
    }

    [string] GetName(){
        return $this.Name
    }

    [string] GetShell(){
        return "unknown"
    }

    [string] GetPackageManager(){
        return "unknown"
    }

    [string] GetRuntimePath(){
        return $env:PATH
    }

}
