export type CameraFocusPriority =

    | "normal"
    | "warning"
    | "critical";



export interface CameraFocusRequest {


    readonly targetId:

        string;



    readonly priority:

        CameraFocusPriority;



    readonly reason:

        string;



    readonly createdAt:

        Date;


}
