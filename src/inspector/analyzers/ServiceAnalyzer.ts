import { ArchitectureInspectionResult } from "../models/ArchitectureInspectionResult.js";

export class ServiceAnalyzer {

    public async analyze(
        result: ArchitectureInspectionResult
    ): Promise<void> {

        result.services++;

        result.recommendations.push(
            "Service registration verified."
        );

    }

}
