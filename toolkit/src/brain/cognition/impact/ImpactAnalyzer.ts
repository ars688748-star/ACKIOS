import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export interface ImpactAnalysis {

    score: number;

    severity: "low" | "medium" | "high";

    affectedAreas: string[];

}

export class ImpactAnalyzer implements ICognitiveModule {

    readonly name = "ImpactAnalyzer";

    async initialize(): Promise<void> {}

    async process(context: ICognitiveContext): Promise<void> {

        const relations =
            context.state.get("causeEffect") as
            | { confidence?: number }[]
            | undefined;

        const confidence =
            relations?.length
                ? Math.max(...relations.map(r => r.confidence ?? 0))
                : 0;

        const impact: ImpactAnalysis = {

            score: confidence,

            severity:
                confidence >= 0.8
                    ? "high"
                    : confidence >= 0.4
                        ? "medium"
                        : "low",

            affectedAreas: relations?.length
                ? ["planning"]
                : []

        };

        context.state.set("impact", impact);

    }

    async shutdown(): Promise<void> {}

}
