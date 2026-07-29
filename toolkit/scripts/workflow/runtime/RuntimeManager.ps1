Set-StrictMode -Version Latest

. "$PSScriptRoot\RuntimeContext.ps1"
. "$PSScriptRoot\RuntimeState.ps1"
. "$PSScriptRoot\RuntimeEvent.ps1"

class RuntimeManager {

    [RuntimeContext]$Context
    [RuntimeState]$State
    [System.Collections.ArrayList]$Events

    RuntimeManager(){
        $this.Context = [RuntimeContext]::new()
        $this.State = [RuntimeState]::new()
        $this.Events = [System.Collections.ArrayList]::new()
    }

    [void] AddEvent([string]$Name){
        $this.Events.Add(
            [RuntimeEvent]::new($Name)
        ) | Out-Null

        $this.State.UpdatedAt = Get-Date
    }

    [RuntimeContext] Start(){
        $this.State.Status = "RUNNING"
        $this.AddEvent("RuntimeStarted")
        return $this.Context
    }

    [void] Stop(){
        $this.State.Status = "STOPPED"
        $this.AddEvent("RuntimeStopped")
    }

    [RuntimeContext] Restart(){
        $this.Stop()
        $this.State = [RuntimeState]::new()
        $this.State.Status = "RUNNING"
        $this.AddEvent("RuntimeRestarted")
        return $this.Context
    }

    [RuntimeContext] GetStatus(){
        return $this.Context
    }

    [RuntimeState] GetState(){
        return $this.State
    }

    [object[]] GetEvents(){
        return $this.Events
    }

}
