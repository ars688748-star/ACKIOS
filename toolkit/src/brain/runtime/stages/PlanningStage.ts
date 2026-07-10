import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

export class PlanningStage implements IRuntimeStage {

    public readonly name = "PlanningStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        return context;

    }

}
