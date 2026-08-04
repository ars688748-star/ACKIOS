import type { ArchitectureViolation } from "./ArchitectureViolation.js";

export interface ArchitectureReport {

    readonly scannedFiles: number;

    readonly scannedDirectories: number;

    readonly nodeCount: number;

    readonly dependencyCount: number;

    readonly violations: readonly ArchitectureViolation[];

}
