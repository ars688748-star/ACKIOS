export interface IKernel {

    initialize(): Promise<void>;

    start(): Promise<void>;

    stop(): Promise<void>;

    dispose(): Promise<void>;

    getService<T>(name: string): T;

    hasService(name: string): boolean;

}
