import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "../pipeline/IRuntimeStage.js";

import { MemoryManager } from "../../memory/MemoryManager.js";

export class MemoryStage implements IRuntimeStage {

    public readonly name = "MemoryStage";

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        const memory =
            context.services?.get<MemoryManager>(
                "MemoryManager"
            );

        if (memory) {

            await memory.save({

                id: crypto.randomUUID(),

                kind: "session",

                content: context.input,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

        return {

            ...context,

            memory: context.input

        };

    }

}
