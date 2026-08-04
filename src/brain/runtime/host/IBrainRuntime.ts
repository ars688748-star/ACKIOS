import { BrainPipeline } from "../pipeline/BrainPipeline.js";
import { RuntimeContext } from "../context/RuntimeContext.js";

export interface IBrainRuntime {

    start(): Promise<void>;

    stop(): Promise<void>;

    getPipeline(): BrainPipeline;

    run(
        context: RuntimeContext
    ): Promise<RuntimeContext>;

}
