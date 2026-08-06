import { HealthCheckResult } from "./HealthCheckResult.js";
import { IHealthCheck } from "./IHealthCheck.js";

export class HealthEngine {

    public constructor(
        private readonly checks: IHealthCheck[]
    ) {}

    public async execute(): Promise<HealthCheckResult[]> {

        const results: HealthCheckResult[] = [];

        for (const check of this.checks) {

            results.push(
                await check.execute()
            );

        }

        return results;

    }

}
