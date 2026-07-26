export type RuntimeEventType =
    | "runtime.started"
    | "runtime.initialized"
    | "runtime.failed"
    | "runtime.ready";


export interface RuntimeEvent {

    type: RuntimeEventType;

    timestamp: string;

    payload?: unknown;

}
