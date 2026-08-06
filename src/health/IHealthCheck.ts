import { HealthCheckResult } from "./HealthCheckResult.js";

export interface IHealthCheck{

    readonly name:string;

    execute():Promise<HealthCheckResult>;

}
