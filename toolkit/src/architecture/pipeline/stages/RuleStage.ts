import type { ArchitectureContext } from "../../model/ArchitectureContext.js";
import type { PipelineStage } from "../PipelineStage.js";

import { ArchitectureRuleEngine } from "../../ArchitectureRuleEngine.js";
import { CoreBoundaryRule } from "../../rules/CoreBoundaryRule.js";
import { ContractsBoundaryRule } from "../../rules/ContractsBoundaryRule.js";

export class RuleStage implements PipelineStage {

    public readonly name = "Rules";

    private readonly engine =
        new ArchitectureRuleEngine([
            new CoreBoundaryRule(),
            new ContractsBoundaryRule()
        ]);

    public async execute(
        context: ArchitectureContext
    ): Promise<ArchitectureContext> {

        if (!context.graph) {

            return context;

        }

        context.violations =
            await this.engine.validate(context.graph);

        return context;

    }

}
