import { PlatformNode } from "../models/PlatformNode.js";

export class PlatformRegistryService {

    private readonly components = new Map<string, PlatformNode>();

    register(component: PlatformNode): void {
        this.components.set(component.id, component);
    }

    unregister(id: string): void {
        this.components.delete(id);
    }

    get(id: string): PlatformNode | undefined {
        return this.components.get(id);
    }

    getAll(): PlatformNode[] {
        return [...this.components.values()];
    }

    has(id: string): boolean {
        return this.components.has(id);
    }

    clear(): void {
        this.components.clear();
    }
}
