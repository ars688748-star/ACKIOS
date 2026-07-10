export interface IBrainRuntime {

    start(): Promise<void>;

    stop(): Promise<void>;

}
