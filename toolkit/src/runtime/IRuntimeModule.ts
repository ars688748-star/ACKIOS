export interface IRuntimeModule {

    initialize(): Promise<void>;

    start(): Promise<void>;

    stop(): Promise<void>;

    dispose(): Promise<void>;

}
