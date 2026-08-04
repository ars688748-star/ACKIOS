export interface IBrainService {

    readonly name: string;

    initialize(): Promise<void>;

    dispose(): Promise<void>;

}
