import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class CognitiveRegistry {

    private readonly modules = new Map<string, ICognitiveModule>();

    register(module: ICognitiveModule): void {

        this.modules.set(module.name, module);

    }

    unregister(name: string): boolean {

        return this.modules.delete(name);

    }

    get(name: string): ICognitiveModule | undefined {

        return this.modules.get(name);

    }

    getModules(): readonly ICognitiveModule[] {

        return [...this.modules.values()];

    }

}
