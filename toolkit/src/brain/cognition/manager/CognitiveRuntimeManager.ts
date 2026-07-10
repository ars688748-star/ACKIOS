import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export class CognitiveRuntimeManager {

    constructor(
        private readonly runtime: CognitiveRuntime
    ) {}

    async start(): Promise<void> {

        await this.runtime.initialize();

    }

    async execute(context: ICognitiveContext): Promise<void> {

        await this.runtime.execute(context);

    }

    async stop(): Promise<void> {

        await this.runtime.shutdown();

    }

}
