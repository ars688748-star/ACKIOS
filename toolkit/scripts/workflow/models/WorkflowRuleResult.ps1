class WorkflowRuleResult {

    [string]$Rule

    [string]$Status

    [string]$Decision

    [string]$Priority

    [string[]]$Recommendations

    [string[]]$Warnings

    [bool]$StopPipeline

    WorkflowRuleResult() {

        $this.Rule = ""
        $this.Status = "UNKNOWN"
        $this.Decision = ""
        $this.Priority = "NORMAL"
        $this.StopPipeline = $false
        $this.Recommendations = @()
        $this.Warnings = @()

    }

}
