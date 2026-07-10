import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveRuntime } from "../interfaces/ICognitiveRuntime.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";
import { CognitivePipeline } from "../pipeline/CognitivePipeline.js";

export class CognitiveRuntime implements ICognitiveRuntime {

    constructor(
        private readonly pipeline: CognitivePipeline = new CognitivePipeline()
    ) {}

    register(module: ICognitiveModule): void {

        this.pipeline.register(module);

    }

    unregister(name: string): boolean {

        return this.pipeline.unregister(name);

    }

    modules(): readonly ICognitiveModule[] {

        return this.pipeline.modulesSnapshot();

    }

    async initialize(): Promise<void> {

        await this.pipeline.initialize();

    }

    async execute(context: ICognitiveContext): Promise<void> {

        await this.pipeline.execute(context);

    }

    async shutdown(): Promise<void> {

        await this.pipeline.shutdown();

    }

}
