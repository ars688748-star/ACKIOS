export interface HealthCheckResult{

    name:string;

    status:"OK"|"WARNING"|"ERROR";

    message:string;

}
