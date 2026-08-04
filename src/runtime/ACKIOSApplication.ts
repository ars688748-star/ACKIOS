import { ACKIOSKernel } from "../kernel/ACKIOSKernel.js";
import { ACKIOSKernelBuilder } from "../kernel/ACKIOSKernelBuilder.js";
import { ACKIOSRuntime } from "./ACKIOSRuntime.js";

export class ACKIOSApplication {

    public readonly kernel: ACKIOSKernel =
        new ACKIOSKernelBuilder().build();

    public get runtime(): ACKIOSRuntime {

        return this.kernel.getRuntime();

    }

    public initialize() {

        return this.kernel.initialize();

    }

    public start() {

        return this.kernel.start();

    }

    public stop() {

        return this.kernel.stop();

    }

    public dispose() {

        return this.kernel.dispose();

    }

}

