import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class WorldModel implements ICognitiveModule {

    readonly name = "WorldModel";

    private readonly facts = new Map<string, unknown>();

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        this.facts.set("lastInput", context.input);

        context.state.set(
            "worldModel",
            Object.fromEntries(this.facts)
        );

    }

    async shutdown(): Promise<void> {

        this.facts.clear();

    }

}
