import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class AttentionEngine implements ICognitiveModule {

    readonly name = "AttentionEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        context.metadata.set("attention.timestamp", Date.now());

        context.metadata.set(
            "attention.hasInput",
            context.input !== undefined && context.input !== null
        );

    }

    async shutdown(): Promise<void> {}

}
