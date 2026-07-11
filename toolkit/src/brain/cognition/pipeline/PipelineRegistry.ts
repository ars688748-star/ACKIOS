import { PipelineStage } from "./PipelineStage.js";

export class PipelineRegistry {

    private readonly stages = new Map<PipelineStage, string[]>();

    constructor() {

        for (const stage of Object.values(PipelineStage)) {

            this.stages.set(stage, []);

        }

    }

    register(
        stage: PipelineStage,
        module: string
    ): void {

        this.stages.get(stage)!.push(module);

    }

    getModules(
        stage: PipelineStage
    ): readonly string[] {

        return [...this.stages.get(stage)!];

    }

}
