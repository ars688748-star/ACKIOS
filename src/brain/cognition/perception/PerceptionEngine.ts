import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class PerceptionEngine implements ICognitiveModule {

    readonly name = "PerceptionEngine";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        context.state.set("perception", {
            received: true,
            value: context.input
        });

    }

    async shutdown(): Promise<void> {}

}
