export type UniverseActionType =

    | "camera-focus"
    | "animation"
    | "object-state";




export interface UniverseAction {


    readonly type:

        UniverseActionType;



    readonly targetId:

        string;



    readonly payload:

        unknown;


}
