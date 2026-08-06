export interface IGuardianService {

    scan(): Promise<void>;

    classify(): Promise<void>;

    analyze(): Promise<void>;

    buildSnapshot(): Promise<void>;

    validate(): Promise<void>;

    publish(): Promise<void>;

}
