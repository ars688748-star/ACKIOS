class WorkflowRuleRegistration {

    [string]$Name
    [string]$Function
    [string]$Category
    [string]$Priority
    [bool]$Enabled

    WorkflowRuleRegistration(){

        $this.Enabled = $true

    }

}
