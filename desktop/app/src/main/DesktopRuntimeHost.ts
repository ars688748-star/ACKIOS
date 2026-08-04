import { RuntimeBootstrap } from "./runtime/RuntimeBootstrap.js";
import { ACKIOSRuntimeBridge } from "./bridge/ACKIOSRuntimeBridge.js";

export class DesktopRuntimeHost {

    private readonly runtime =
        new RuntimeBootstrap();

    private readonly bridge =
        new ACKIOSRuntimeBridge();

    public async initialize(): Promise<void> {

        await this.runtime.initialize();

        await this.bridge.initialize();

    }

    public async start(): Promise<void> {

        await this.runtime.start();

        await this.bridge.start();

    }

    public async stop(): Promise<void> {

        await this.bridge.stop();

        await this.runtime.stop();

    }

    public getStatus() {

        return this.runtime.getStatus();

    }

}
