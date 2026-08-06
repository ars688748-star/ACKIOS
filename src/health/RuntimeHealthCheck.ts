import { IHealthCheck } from "./IHealthCheck.js";
import { HealthCheckResult } from "./HealthCheckResult.js";

export class RuntimeHealthCheck
implements IHealthCheck{

    public readonly name =
        "Runtime";

    public async execute():Promise<HealthCheckResult>{

        return{

            name:this.name,

            status:"OK",

            message:"Runtime initialized."

        };

    }

}
