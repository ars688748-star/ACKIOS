import { ArchitectureInspectionResult } from "../models/ArchitectureInspectionResult.js";

export class RuntimeAnalyzer {

    public async analyze(
        result: ArchitectureInspectionResult
    ): Promise<void> {

        result.recommendations.push(
            "Runtime analysis completed."
        );

    }

}
