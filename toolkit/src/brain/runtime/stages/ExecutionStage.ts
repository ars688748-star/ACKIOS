import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

export class ExecutionStage implements IRuntimeStage {

    public readonly name = "ExecutionStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        return context;

    }

}
