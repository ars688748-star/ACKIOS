import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";
import { BrainId } from "../factory/index.js";

export class ModuleKnowledgeProvider {

    populate(builder: BrainBuilder, modules: string[]): void {

        for (const module of modules) {

            builder.addNode({

                id: BrainId.create(),

                type: BrainNodeType.Module,

                name: module,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}

