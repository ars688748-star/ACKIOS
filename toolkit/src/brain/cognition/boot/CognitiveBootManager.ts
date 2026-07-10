import { CognitiveKernelService } from "../services/CognitiveKernelService.js";
import { CognitiveRuntimeFactory } from "../factory/CognitiveRuntimeFactory.js";
import { CognitiveRuntime } from "../runtime/CognitiveRuntime.js";

export class CognitiveBootManager {

    private readonly kernel = new CognitiveKernelService();

    private runtime?: CognitiveRuntime;

    async boot(): Promise<CognitiveRuntime> {

        await this.kernel.initialize();

        this.runtime = CognitiveRuntimeFactory.create();

        await this.runtime.initialize();

        return this.runtime;

    }

    async shutdown(): Promise<void> {

        if (this.runtime) {

            await this.runtime.shutdown();

        }

        await this.kernel.shutdown();

    }

}
