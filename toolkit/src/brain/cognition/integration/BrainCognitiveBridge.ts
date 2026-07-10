import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";

export class BrainCognitiveBridge {

    constructor(
        private readonly runtime: CognitiveRuntime,
        private readonly registry: CognitiveRegistry
    ){}

    async initialize(){

        for(const module of this.registry.getModules()){
            this.runtime.register(module);
        }

    }

    async execute(context:ICognitiveContext){

        await this.runtime.execute(context);

    }

}
