export interface CognitiveExtension{

    readonly name:string;

    initialize():Promise<void>;

}
