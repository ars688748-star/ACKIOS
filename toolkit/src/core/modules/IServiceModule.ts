import { ServiceContainer } from "../ServiceContainer.js";

export interface IServiceModule {

    register(container: ServiceContainer): void;

}
