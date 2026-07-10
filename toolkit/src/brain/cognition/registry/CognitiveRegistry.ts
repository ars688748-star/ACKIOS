import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class CognitiveRegistry {

    private readonly modules: ICognitiveModule[] = [];

    register(module: ICognitiveModule): void {
        this.modules.push(module);
    }

    getModules(): readonly ICognitiveModule[] {
        return this.modules;
    }

}
