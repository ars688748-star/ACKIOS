import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

export class KnowledgeStage implements IRuntimeStage {

    public readonly name = "KnowledgeStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        return context;

    }

}
