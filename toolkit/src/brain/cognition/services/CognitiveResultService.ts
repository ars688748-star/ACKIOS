import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { CognitiveResult } from "../result/CognitiveResult.js";
import { CognitiveResultBuilder } from "../result/CognitiveResultBuilder.js";

export class CognitiveResultService {

    constructor(
        private readonly builder: CognitiveResultBuilder
    ) {}

    build(
        context: ICognitiveContext
    ): CognitiveResult {

        return this.builder.build(context);

    }

}
