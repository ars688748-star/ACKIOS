import { RiskReport } from "../../intelligence/risk/index.js";
import { BrainBuilder } from "../builders/index.js";
import { BrainNodeType } from "../models/index.js";

export class RiskKnowledgeProvider {

    populate(builder: BrainBuilder, report: RiskReport): void {

        for (const risk of report.risks) {

            builder.addNode({

                id: crypto.randomUUID(),

                type: BrainNodeType.Risk,

                name: risk.title,

                metadata: risk as unknown as Record<string, unknown>,

                createdAt: new Date(),

                updatedAt: new Date()

            });

        }

    }

}
