export interface IRuntimeService {

    initialize(): Promise<void>;

    start(): Promise<void>;

    stop(): Promise<void>;

}
