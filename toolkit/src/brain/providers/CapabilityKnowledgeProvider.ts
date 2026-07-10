import { CapabilityReference } from "../models/index.js";
import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class CapabilityKnowledgeProvider {

    populate(builder: BrainBuilder, capabilities: CapabilityReference[]): void {

        for (const capability of capabilities) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Capability,

                name: capability.name,

                metadata: capability as unknown as Record<string, unknown>,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
