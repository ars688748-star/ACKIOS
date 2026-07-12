import type { ArchitectureViolation } from "./ArchitectureViolation.js";

export interface ArchitectureReport {

    readonly scannedFiles: number;

    readonly scannedDirectories: number;

    readonly violations: readonly ArchitectureViolation[];

}