import { TechnologyProfile } from "../models/index.js";
import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class TechnologyKnowledgeProvider {

    populate(builder: BrainBuilder, technologies: TechnologyProfile[]): void {

        for (const technology of technologies) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Technology,

                name: technology.name,

                metadata: technology as unknown as Record<string, unknown>,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
