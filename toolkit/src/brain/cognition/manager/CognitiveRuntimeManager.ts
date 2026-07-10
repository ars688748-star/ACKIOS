import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export class CognitiveRuntimeManager{

    constructor(
        private readonly runtime:CognitiveRuntime
    ){}

    async start():Promise<void>{

        await this.runtime.initialize();

    }

    async execute(context:any):Promise<void>{

        await this.runtime.execute(context);

    }

}
