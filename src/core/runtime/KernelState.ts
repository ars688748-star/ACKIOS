export type KernelStatus =
    | "created"
    | "starting"
    | "running"
    | "stopped"
    | "failed";


export class KernelState {

    public status: KernelStatus;

    public startedAt?: Date;


    constructor() {

        this.status = "created";

    }


    public start(): void {

        this.status = "running";

        this.startedAt = new Date();

    }


    public stop(): void {

        this.status = "stopped";

    }

}
