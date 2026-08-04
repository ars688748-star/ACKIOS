export interface CognitiveJob{

    readonly id:string;

    run():Promise<void>;

}
