import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";
import { CognitiveRegistry } from "../registry/CognitiveRegistry.js";
import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";

export class BrainCognitiveBridge {

    constructor(
        private readonly runtime: CognitiveRuntime,
        private readonly registry: CognitiveRegistry
    ) {}

    async initialize(): Promise<void> {

        await this.runtime.initialize();

    }

    async execute(context: ICognitiveContext): Promise<void> {

        await this.runtime.execute(context);

    }

}
