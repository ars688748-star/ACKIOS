class WorkflowRuleResult {

    [string]$Rule

    [string]$Status

    [string]$Decision

    [string]$Priority

[datetime]$StartedAt

[datetime]$FinishedAt

[double]$DurationMs

    [string[]]$Recommendations

    [string[]]$Warnings

    [bool]$StopPipeline

    WorkflowRuleResult() {

        $this.Rule = ""
        $this.Status = "UNKNOWN"
        $this.Decision = ""
        $this.Priority = "NORMAL"

$this.StartedAt = Get-Date
$this.FinishedAt = $this.StartedAt
$this.DurationMs = 0
        $this.StopPipeline = $false
        $this.Recommendations = @()
        $this.Warnings = @()

    }

}

