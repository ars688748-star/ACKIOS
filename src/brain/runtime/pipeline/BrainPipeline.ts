import { RuntimeContext } from "../context/RuntimeContext.js";
import { IRuntimeStage } from "./IRuntimeStage.js";
import { IBrainPipeline } from "./IBrainPipeline.js";

export class BrainPipeline implements IBrainPipeline {

    private readonly stages: IRuntimeStage[] = [];

    public addStage(
        stage: IRuntimeStage
    ): this {

        this.stages.push(stage);

        return this;

    }

    public clear(): void {

        this.stages.length = 0;

    }

    public count(): number {

        return this.stages.length;

    }

    public async execute(
        context: RuntimeContext
    ): Promise<RuntimeContext> {

        let current = context;

        for (const stage of this.stages) {

            current = await stage.execute(current);

        }

        return current;

    }

}
