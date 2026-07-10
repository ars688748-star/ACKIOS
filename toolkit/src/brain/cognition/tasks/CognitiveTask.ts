export interface CognitiveTask{

    readonly id:string;

    execute():Promise<void>;

}
