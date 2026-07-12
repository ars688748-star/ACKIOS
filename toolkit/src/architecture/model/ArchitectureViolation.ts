export interface ArchitectureViolation {

    readonly rule: string;

    readonly message: string;

    readonly source: string;

    readonly target?: string;

}