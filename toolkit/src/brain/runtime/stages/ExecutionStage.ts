import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { ExecutionManager } from "../../execution/ExecutionManager.js";

export class ExecutionStage implements IRuntimeStage {

    public readonly name = "ExecutionStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        const execution =
            context.services?.get<ExecutionManager>(
                "ExecutionManager"
            );

        if (execution) {

            return {

                ...context,

                output: execution

            };

        }

        return context;

    }

}
