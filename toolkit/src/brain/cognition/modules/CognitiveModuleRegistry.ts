import { CognitiveModuleDescriptor } from "./CognitiveModuleDescriptor.js";

export class CognitiveModuleRegistry {

    private readonly modules = new Map<string, CognitiveModuleDescriptor>();

    register(module: CognitiveModuleDescriptor): void {

        this.modules.set(module.id, module);

    }

    unregister(id: string): boolean {

        return this.modules.delete(id);

    }

    get(id: string): CognitiveModuleDescriptor | undefined {

        return this.modules.get(id);

    }

    all(): readonly CognitiveModuleDescriptor[] {

        return [...this.modules.values()];

    }

    count(): number {

        return this.modules.size;

    }

}
