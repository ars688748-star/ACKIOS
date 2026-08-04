export interface InstallationContext {

    installPath: string;

    version: string;

    platform: string;

    strategy?: string;

    components?: string[];

    warnings?: string[];

    workspaceCreated: boolean;

    status:
        | "pending"
        | "running"
        | "completed"
        | "failed";

}
