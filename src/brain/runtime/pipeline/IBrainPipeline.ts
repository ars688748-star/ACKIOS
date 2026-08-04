import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "./IRuntimeStage.js";

export interface IBrainPipeline {

    addStage(
        stage: IRuntimeStage
    ): this;

    clear(): void;

    count(): number;

    execute(
        context: RuntimeContext
    ): Promise<RuntimeContext>;

}
