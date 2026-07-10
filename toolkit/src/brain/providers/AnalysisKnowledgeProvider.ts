import { AnalysisSnapshot } from "../models/index.js";
import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class AnalysisKnowledgeProvider {

    populate(builder: BrainBuilder, analyses: AnalysisSnapshot[]): void {

        for (const analysis of analyses) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Analysis,

                name: analysis.analyzer,

                metadata: analysis as unknown as Record<string, unknown>,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
