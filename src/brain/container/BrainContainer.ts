import { IBrainService } from "../services/IBrainService.js";
import { IBrainContainer } from "./IBrainContainer.js";

export class BrainContainer implements IBrainContainer {

    private readonly services = new Map<string, IBrainService>();

    public register(service: IBrainService): void {
        this.services.set(service.name, service);
    }

    public unregister(name: string): boolean {
        return this.services.delete(name);
    }

    public clear(): void {
        this.services.clear();
    }

    public get<T extends IBrainService>(name: string): T | undefined {
        return this.services.get(name) as T | undefined;
    }

    public has(name: string): boolean {
        return this.services.has(name);
    }

    public getAll(): readonly IBrainService[] {
        return [...this.services.values()];
    }

}
