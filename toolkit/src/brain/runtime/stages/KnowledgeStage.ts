import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { KnowledgeManager } from "../../knowledge/KnowledgeManager.js";
import { KnowledgeNode } from "../../knowledge/KnowledgeNode.js";
import { KnowledgeCategory } from "../../knowledge/KnowledgeCategory.js";

export class KnowledgeStage implements IRuntimeStage {

    public readonly name = "KnowledgeStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        const knowledge =
            context.services?.get<KnowledgeManager>(
                "KnowledgeManager"
            );

        if (knowledge && context.input !== undefined) {

            const node =
                new KnowledgeNode(

                    crypto.randomUUID(),

                    "runtime-input",

                    "Runtime Input",

                    {
                        source: "BrainRuntime",
                        value: context.input
                    }

                );

            knowledge.addNode(
                node,
                KnowledgeCategory.Capability
            );

        }

        return {

            ...context,

            knowledge: context.input

        };

    }

}
