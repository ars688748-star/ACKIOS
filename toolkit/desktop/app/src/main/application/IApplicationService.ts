export interface IApplicationService {

    initialize(): Promise<void>;

    start(): Promise<void>;

    stop(): Promise<void>;

}
