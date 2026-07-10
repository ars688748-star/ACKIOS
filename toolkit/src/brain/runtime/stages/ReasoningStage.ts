import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

export class ReasoningStage implements IRuntimeStage {

    public readonly name = "ReasoningStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        return context;

    }

}
