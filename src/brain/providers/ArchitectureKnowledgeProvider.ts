import { ArchitectureReport } from "../../intelligence/architecture/index.js";
import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class ArchitectureKnowledgeProvider {

    populate(builder: BrainBuilder, report: ArchitectureReport): void {

        builder.addNode({

            id: crypto.randomUUID(),

            type: BrainNodeType.Architecture,

            name: report.architecture,

            metadata: report as unknown as Record<string, unknown>,

            createdAt: new Date(),

            updatedAt: new Date()

        });

    }

}
