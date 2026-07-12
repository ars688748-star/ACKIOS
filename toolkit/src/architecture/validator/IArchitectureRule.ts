import type { ArchitectureNode } from "../model/ArchitectureNode.js";
import type { ArchitectureViolation } from "../model/ArchitectureViolation.js";

export interface IArchitectureRule {

    readonly name: string;

    validate(
        nodes: readonly ArchitectureNode[]
    ): Promise<readonly ArchitectureViolation[]>;

}