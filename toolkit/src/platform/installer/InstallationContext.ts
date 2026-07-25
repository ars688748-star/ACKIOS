export interface InstallationContext {

    installPath: string;

    version: string;

    platform: string;

    workspaceCreated: boolean;

    status:
        | "pending"
        | "running"
        | "completed"
        | "failed";

}
