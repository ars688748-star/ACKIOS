import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { ArchitectureOrchestrator } from "../../orchestrator/ArchitectureOrchestrator.js";

export class ArchitectureOrchestratorStage implements IRuntimeStage {

    public readonly name = "ArchitectureOrchestratorStage";

    private readonly orchestrator =
        new ArchitectureOrchestrator();

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        if (context.input) {

            return {

                ...context,

                workflow: this.orchestrator.orchestrate(
                    String(context.input)
                )

            };

        }

        return context;

    }

}
