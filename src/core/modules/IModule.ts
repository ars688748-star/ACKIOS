import { ServiceContainer } from "../ServiceContainer.js";

export interface IModule {

    register(container: ServiceContainer): void;

}
