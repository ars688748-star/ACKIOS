import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class ServiceKnowledgeProvider {

    populate(builder: BrainBuilder, services: string[]): void {

        for (const service of services) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Service,

                name: service,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
