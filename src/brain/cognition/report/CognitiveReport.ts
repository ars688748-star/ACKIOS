import { CognitiveResult } from "../result/CognitiveResult.js";

export interface CognitiveReport {

    readonly timestamp: Date;

    readonly summary: string;

    readonly result: CognitiveResult;

}
