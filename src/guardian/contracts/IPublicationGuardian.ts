export interface IPublicationGuardian {

    scan(): Promise<string[]>;

    classify(files:string[]):Promise<void>;

    analyze():Promise<void>;

    buildSnapshot():Promise<void>;

    validate():Promise<void>;

    publish():Promise<void>;

}
