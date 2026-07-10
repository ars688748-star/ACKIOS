import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class CognitivePipeline {

    private readonly modules: ICognitiveModule[] = [];

    add(module: ICognitiveModule): void {
        this.modules.push(module);
    }

    async execute(context: ICognitiveContext): Promise<void> {
        for (const module of this.modules) {
            await module.process(context);
        }
    }

}

