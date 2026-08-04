import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { PlanningManager } from "../../planning/PlanningManager.js";

export class PlanningStage implements IRuntimeStage {

    public readonly name = "PlanningStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        const planning =
            context.services?.get<PlanningManager>(
                "PlanningManager"
            );

        if (planning) {

            return {

                ...context,

                plan: planning

            };

        }

        return context;

    }

}
