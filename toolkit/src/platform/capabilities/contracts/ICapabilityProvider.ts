import { Capability } from "../models/Capability.js";

export interface ICapabilityProvider {

    getCapabilities(): Promise<Capability[]>;

}
