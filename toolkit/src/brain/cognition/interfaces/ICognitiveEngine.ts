export interface ICognitiveEngine {

    readonly name:string;

    initialize():Promise<void>;

}
