import { promises as fs } from "node:fs";

import { ArchitectureInspectionResult } from "../models/ArchitectureInspectionResult.js";
import { AllowedNewTypes } from "../models/AllowedNewTypes.js";
import { ServiceTypes } from "../models/ServiceTypes.js";

export class DirectNewAnalyzer {

    public async analyze(
        files: string[],
        result: ArchitectureInspectionResult
    ): Promise<void> {

        let infrastructure = 0;
        let services = 0;
        const violations = 0;

        for (const file of files) {

            const content =
                await fs.readFile(file, "utf8");

            const matches =
                content.match(/\bnew\s+([A-Z][A-Za-z0-9_]*)/g);

            if (!matches) {
                continue;
            }

            for (const match of matches) {

                const type =
                    match.replace(/^new\s+/, "");

                if (AllowedNewTypes.has(type)) {
                    continue;
                }

                if (ServiceTypes.has(type)) {
                    services++;
                    continue;
                }

                infrastructure++;

            }

        }

        result.directNews =
            infrastructure + services + violations;

        result.infrastructureNews =
            infrastructure;

        result.serviceNews =
            services;

        result.violationNews =
            violations;

        result.recommendations.push(
            "Direct object classification completed."
        );

    }

}
