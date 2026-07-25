import { ServiceContainer } from "../ServiceContainer.js";

export class ServiceResolver {

    private readonly container: ServiceContainer;


    constructor(
        container: ServiceContainer
    ) {

        this.container = container;

    }


    public resolve<T>(
        name: string
    ): T {

        return this.container.resolve(
            name
        ) as T;

    }

}
