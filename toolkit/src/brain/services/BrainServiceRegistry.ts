import { IBrainService } from "./IBrainService.js";

export class BrainServiceRegistry {

    private readonly services = new Map<string, IBrainService>();

    public register(service: IBrainService): void {
        this.services.set(service.name, service);
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

    public async initialize(): Promise<void> {
        for (const service of this.services.values()) {
            await service.initialize();
        }
    }

    public async dispose(): Promise<void> {
        const services = [...this.services.values()].reverse();

        for (const service of services) {
            await service.dispose();
        }
    }

}
