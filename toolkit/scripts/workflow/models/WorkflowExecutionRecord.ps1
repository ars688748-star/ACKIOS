class WorkflowExecutionRecord {

    [string]$Id
    [string]$Timestamp

    [string]$Branch
    [string]$Commit

    [string]$Epic
    [string]$Story

    [string]$Build
    [string]$Tests

    [string]$Status

    WorkflowExecutionRecord() {
        $this.Timestamp = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
    }
}
