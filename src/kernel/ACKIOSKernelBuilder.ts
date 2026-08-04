import { ACKIOSKernel } from "./ACKIOSKernel.js";
import { ACKIOSRuntimeBuilder } from "../runtime/ACKIOSRuntimeBuilder.js";

export class ACKIOSKernelBuilder {

    public build(): ACKIOSKernel {

        const runtime =
            new ACKIOSRuntimeBuilder().build();

        return new ACKIOSKernel(runtime);

    }

}
