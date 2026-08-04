export type CameraFocusLevel =

    | "none"
    | "normal"
    | "critical";



export interface CameraFocusDecision {


    readonly level:

        CameraFocusLevel;



    readonly targetId?:

        string;



    readonly reason:

        string;


}
