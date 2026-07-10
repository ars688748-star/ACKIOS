import { DependencyReport } from "../../intelligence/dependency/index.js";
import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class DependencyKnowledgeProvider {

    populate(builder: BrainBuilder, report: DependencyReport): void {

        for (const dependency of report.dependencies) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Package,

                name: dependency.name,

                metadata: dependency as unknown as Record<string, unknown>,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
