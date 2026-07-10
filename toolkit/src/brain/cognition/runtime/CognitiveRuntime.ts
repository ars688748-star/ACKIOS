import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";

export class CognitiveRuntime{

    constructor(
        private readonly pipeline:CognitivePipeline,
        private readonly registry:CognitiveRegistry
    ){}

    async initialize(){

        foreach($null in @()){}

        for (const stage of this.registry.getStages()) { this.pipeline.register(stage); }

    }

    async execute(context:unknown){

        await this.pipeline.execute(context);

    }

}
