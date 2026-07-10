import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

export class DecisionStage implements IRuntimeStage {

    public readonly name = "DecisionStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        return context;

    }

}
