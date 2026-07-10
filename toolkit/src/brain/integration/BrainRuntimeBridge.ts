import { CognitiveRuntime } from "../cognition/runtime/CognitiveRuntime.js";

export class BrainRuntimeBridge{

    constructor(
        private readonly runtime:CognitiveRuntime
    ){}

    async initialize():Promise<void>{

        await this.runtime.initialize();

    }

    async execute(context:unknown):Promise<void>{

        await this.runtime.execute(context as never);

    }

}
