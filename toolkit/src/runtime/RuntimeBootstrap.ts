import { ACKIOSRuntime } from "./ACKIOSRuntime.js";
import { RuntimeLifecycleCoordinator } from "./lifecycle/RuntimeLifecycleCoordinator.js";

export class RuntimeBootstrap {

    public constructor(
        private readonly runtime: ACKIOSRuntime,
        private readonly lifecycle: RuntimeLifecycleCoordinator
    ) {

        this.lifecycle.register(this.runtime);

    }

    public async run(): Promise<void> {

        await this.lifecycle.initialize();

        await this.lifecycle.start();

    }

    public async shutdown(): Promise<void> {

        await this.lifecycle.stop();

        await this.runtime.dispose();

    }

}
