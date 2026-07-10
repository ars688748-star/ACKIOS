import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class PluginKnowledgeProvider {

    populate(builder: BrainBuilder, plugins: string[]): void {

        for (const plugin of plugins) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Plugin,

                name: plugin,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
