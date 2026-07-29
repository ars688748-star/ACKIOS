Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeContext.ps1"

class RuntimeManager {
    [RuntimeContext]$Context

    RuntimeManager(){
        $this.Context = [RuntimeContext]::new()
    }

    [RuntimeContext] Start(){
        return $this.Context
    }

    [void] Stop(){
    }

    [RuntimeContext] Restart(){
        $this.Context = [RuntimeContext]::new()
        return $this.Context
    }

    [RuntimeContext] GetStatus(){
        return $this.Context
    }
}
