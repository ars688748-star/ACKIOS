import { IBrainService } from "../services/IBrainService.js";

export interface IBrainContainer {

    register(service: IBrainService): void;

    unregister(name: string): boolean;

    clear(): void;

    get<T extends IBrainService>(name: string): T | undefined;

    has(name: string): boolean;

    getAll(): readonly IBrainService[];

}
