import { RuntimeState } from "./RuntimeState.js";

export interface RuntimeStatus {

    readonly state: RuntimeState;

    readonly startedAt?: Date;

    readonly stoppedAt?: Date;

    readonly error?: Error;

}
