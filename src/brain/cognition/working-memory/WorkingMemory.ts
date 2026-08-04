import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class WorkingMemory implements ICognitiveModule {

    readonly name = "WorkingMemory";

    private readonly memory = new Map<string, unknown>();

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        this.memory.set("input", context.input);

        context.state.set("workingMemory", this.snapshot());

    }

    async shutdown(): Promise<void> {

        this.memory.clear();

    }

    snapshot(): Record<string, unknown> {

        return Object.fromEntries(this.memory);

    }

}
