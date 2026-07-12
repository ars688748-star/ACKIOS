import type { ArchitectureGraph } from "../graph/ArchitectureGraph.js";
import type { ArchitectureViolation } from "../model/ArchitectureViolation.js";

export interface IArchitectureRule {

    readonly name: string;

    validate(
        graph: ArchitectureGraph
    ): Promise<readonly ArchitectureViolation[]>;

}
