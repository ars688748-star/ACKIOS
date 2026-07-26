class WorkflowDecisionResult {

    [string]$Status

    [string]$Decision

    [string]$Priority

    [string[]]$Recommendations

    [string[]]$Warnings

    WorkflowDecisionResult() {

        $this.Status = "UNKNOWN"
        $this.Decision = ""
        $this.Priority = "NORMAL"
        $this.Recommendations = @()
        $this.Warnings = @()

    }

}
