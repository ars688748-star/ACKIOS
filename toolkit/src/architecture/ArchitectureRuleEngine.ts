import type { ArchitectureGraph } from "./graph/ArchitectureGraph.js";
import type { ArchitectureViolation } from "./model/ArchitectureViolation.js";
import type { IArchitectureRule } from "./validator/IArchitectureRule.js";

export class ArchitectureRuleEngine {

    public constructor(
        private readonly rules: readonly IArchitectureRule[]
    ) {}

    public async validate(
        graph: ArchitectureGraph
    ): Promise<readonly ArchitectureViolation[]> {

        const violations: ArchitectureViolation[] = [];

        for (const rule of this.rules) {

            violations.push(
                ...(await rule.validate(graph))
            );

        }

        return violations;

    }

}
