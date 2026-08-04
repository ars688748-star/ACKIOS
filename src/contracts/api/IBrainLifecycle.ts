export interface IBrainLifecycle {

    initialize(): Promise<void>;

    start(): Promise<void>;

    stop(): Promise<void>;

    dispose(): Promise<void>;

}
