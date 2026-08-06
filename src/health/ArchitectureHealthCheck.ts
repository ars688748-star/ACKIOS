import { IHealthCheck } from "./IHealthCheck.js";
import { HealthCheckResult } from "./HealthCheckResult.js";

import { ArchitectureHealthProvider } from "./ArchitectureHealthProvider.js";

export class ArchitectureHealthCheck
implements IHealthCheck{

    public readonly name =
        "Architecture";

    public constructor(

        private readonly provider:ArchitectureHealthProvider

    ){}

    public async execute():Promise<HealthCheckResult>{

        const result =
            await this.provider.analyze();

        return{

            name:this.name,

            status:
                result.violationNews > 0
                    ? "WARNING"
                    : "OK",

            message:
                result.violationNews > 0
                    ? result.violationNews +
                      " architecture violation(s)"
                    : "Architecture healthy."

        };

    }

}
