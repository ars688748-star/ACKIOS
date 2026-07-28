export interface IRuntimeLifecycle {

    initialize(): void | Promise<void>;

    start(): void | Promise<void>;

    stop(): void | Promise<void>;

}
