export interface ICognitiveStage{
    readonly name:string;
    execute(context:unknown):Promise<void>;
}
