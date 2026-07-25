import { IKernel } from "./contracts/IKernel.js";
import { ACKIOSRuntime } from "../runtime/ACKIOSRuntime.js";

export class ACKIOSKernel implements IKernel {

    public constructor(
        private readonly runtime: ACKIOSRuntime
    ) {}

    public getService<T>(name: string): T {

        return this.runtime.getService<T>(name);

    }

    public hasService(name: string): boolean {

        return this.runtime.hasService(name);

    }

    public async initialize(): Promise<void> {

        await this.runtime.initialize();

    }

    public async start(): Promise<void> {

        await this.runtime.start();

    }

    public async stop(): Promise<void> {

        await this.runtime.stop();

    }

    public async dispose(): Promise<void> {

        await this.runtime.dispose();

    }

}
