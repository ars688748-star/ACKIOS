import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";
import { BrainId } from "../factory/index.js";

export class FileKnowledgeProvider {

    populate(builder: BrainBuilder, files: string[]): void {

        for (const file of files) {

            builder.addNode({

                id: BrainId.create(),

                type: BrainNodeType.File,

                name: file,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}

