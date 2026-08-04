export class CognitiveKernelService {

    private initialized = false;

    async initialize(): Promise<void> {

        this.initialized = true;

    }

    async shutdown(): Promise<void> {

        this.initialized = false;

    }

    isInitialized(): boolean {

        return this.initialized;

    }

}
