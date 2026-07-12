import type { ArchitectureGraph } from "../graph/ArchitectureGraph.js";
import type { ArchitectureViolation } from "../model/ArchitectureViolation.js";
import { CoreBoundaryPolicy } from "../policy/CoreBoundaryPolicy.js";
import { IArchitectureRule } from "../validator/IArchitectureRule.js";

export class CoreBoundaryRule implements IArchitectureRule {

    readonly name = "CoreBoundaryRule";

    public async validate(
        graph: ArchitectureGraph
    ): Promise<readonly ArchitectureViolation[]> {

        return graph.edges
            .filter(edge =>
                CoreBoundaryPolicy.forbidden.some(path =>
                    edge.to.includes(path)
                )
            )
            .map(edge => ({
                rule: this.name,
                message: "Direct dependency on private core detected.",
                source: edge.from,
                target: edge.to
            }));

    }

}
