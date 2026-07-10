import { BrainContainer } from "../container/BrainContainer.js";
import { BrainKernel } from "./BrainKernel.js";
import { BrainKernelConfig } from "./BrainKernelConfig.js";

export class BrainKernelBuilder {

    private readonly config: BrainKernelConfig = {
        container: new BrainContainer()
    };

    public build(): BrainKernel {
        return new BrainKernel(this.config);
    }

}
