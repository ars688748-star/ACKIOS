export interface CognitivePlugin{

    readonly name:string;

    initialize():Promise<void>;

}
