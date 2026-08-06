import { ArchitectureInspectionResult } from "../../inspector/models/ArchitectureInspectionResult.js";
import { ArchitectureScore } from "./ArchitectureScore.js";

export class ArchitectureScoreEngine{

    public calculate(
        result:ArchitectureInspectionResult
    ):ArchitectureScore{

        const runtime =
            Math.max(
                0,
                100 - result.violationNews * 5
            );

        return{

            runtime,

            repository:100,

            workflow:100,

            health:100,

            overall:runtime

        };

    }

}
