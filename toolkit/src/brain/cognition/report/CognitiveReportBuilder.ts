import { CognitiveResult } from "../result/CognitiveResult.js";
import { CognitiveReport } from "./CognitiveReport.js";

export class CognitiveReportBuilder {

    build(
        result: CognitiveResult
    ): CognitiveReport {

        return {

            timestamp: new Date(),

            summary: "Cognitive pipeline executed successfully.",

            result

        };

    }

}
