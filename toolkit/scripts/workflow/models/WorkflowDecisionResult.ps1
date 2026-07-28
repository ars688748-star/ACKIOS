class WorkflowDecisionResult {

    [string]$Status

    [string]$Decision

    [string]$Priority

[string]$WinningRule

[object[]]$ExecutedRules

[double]$TotalDurationMs

    [string[]]$Recommendations

    [string[]]$Warnings

    WorkflowDecisionResult() {

        $this.Status = "UNKNOWN"
        $this.Decision = ""
        $this.Priority = "NORMAL"

$this.WinningRule = ""

$this.ExecutedRules = @()

$this.TotalDurationMs = 0
        $this.Recommendations = @()
        $this.Warnings = @()

    }

}

