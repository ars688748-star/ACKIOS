import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class ModuleKnowledgeProvider {

    populate(builder: BrainBuilder, modules: string[]): void {

        for (const module of modules) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Module,

                name: module,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
