import type { ArchitectureGraph } from "../graph/ArchitectureGraph.js";
import type { ArchitectureViolation } from "../model/ArchitectureViolation.js";
import { IArchitectureRule } from "../validator/IArchitectureRule.js";

export class ContractsBoundaryRule implements IArchitectureRule {

    readonly name = "ContractsBoundaryRule";

    public async validate(
        graph: ArchitectureGraph
    ): Promise<readonly ArchitectureViolation[]> {

        return graph.nodes
            .filter(node =>
                node.path.includes("/contracts/") &&
                !node.name.startsWith("I") &&
                node.name.endsWith(".ts")
            )
            .map(node => ({
                rule: this.name,
                message: "Contract should be declared as an interface.",
                source: node.path
            }));

    }

}
