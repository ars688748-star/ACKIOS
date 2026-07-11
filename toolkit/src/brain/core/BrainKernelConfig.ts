import { BrainContainer } from "../container/BrainContainer.js";
import { BrainStorage } from "../storage/index.js";

export interface BrainKernelConfig {

    container?: BrainContainer;

    storage?: BrainStorage;

}
