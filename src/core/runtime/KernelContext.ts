import { ServiceContainer } from "../ServiceContainer.js";

export class KernelContext {

    public readonly startedAt: Date;

    public readonly services: ServiceContainer;

    public readonly modules: string[];


    constructor(
        services: ServiceContainer
    ) {

        this.startedAt = new Date();

        this.services = services;

        this.modules = [];

    }


    public addModule(
        name: string
    ): void {

        this.modules.push(name);

    }

}
