import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";
import { BrainId } from "../factory/index.js";

export class RecommendationKnowledgeProvider {

    populate(builder: BrainBuilder, recommendations: string[]): void {

        for (const recommendation of recommendations) {

            builder.addNode({

                id: BrainId.create(),

                type: BrainNodeType.Recommendation,

                name: recommendation,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}

