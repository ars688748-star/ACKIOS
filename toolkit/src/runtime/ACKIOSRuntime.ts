import { ACKIOSContext } from "./ACKIOSContext.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

export class ACKIOSRuntime {

    public constructor(
        public readonly context: ACKIOSContext,
        public readonly modules: IRuntimeModule[]
    ) {}

    public async initialize(): Promise<void> {

        for (const module of this.modules)
            await module.initialize();

    }

    public async start(): Promise<void> {

        for (const module of this.modules)
            await module.start();

    }

    public async stop(): Promise<void> {

        for (const module of [...this.modules].reverse())
            await module.stop();

    }

    public async dispose(): Promise<void> {

        for (const module of [...this.modules].reverse())
            await module.dispose();

    }

}
