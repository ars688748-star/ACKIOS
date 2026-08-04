import { ICognitiveEngine } from "../interfaces/ICognitiveEngine.js";

export class CognitiveOrchestrator {

    private readonly engines: ICognitiveEngine[] = [];

    register(engine: ICognitiveEngine): void {

        this.engines.push(engine);

    }

    async initialize(): Promise<void> {

        for (const engine of this.engines) {

            await engine.initialize();

        }

    }

    async shutdown(): Promise<void> {

        for (const engine of [...this.engines].reverse()) {

            await engine.shutdown();

        }

    }

    getEngines(): readonly ICognitiveEngine[] {

        return [...this.engines];

    }

}
