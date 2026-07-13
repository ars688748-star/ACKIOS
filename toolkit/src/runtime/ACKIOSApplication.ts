import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { ACKIOSRuntimeBuilder } from "./ACKIOSRuntimeBuilder.js";

export class ACKIOSApplication {

    public readonly runtime: ACKIOSRuntime =
        new ACKIOSRuntimeBuilder().build();

    public initialize() {

        return this.runtime.initialize();

    }

    public start() {

        return this.runtime.start();

    }

    public stop() {

        return this.runtime.stop();

    }

    public dispose() {

        return this.runtime.dispose();

    }

}
