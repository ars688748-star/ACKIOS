import { BrainServiceRegistry } from "../../services/BrainServiceRegistry.js";

export interface RuntimeServicesContext {

    readonly services: BrainServiceRegistry;

}
