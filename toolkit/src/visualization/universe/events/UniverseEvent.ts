export type UniverseEventType =

    | "comet"
    | "planet-alert"
    | "asteroid"
    | "explosion";



export interface UniverseEvent {


    readonly id: string;


    readonly type:
        UniverseEventType;



    readonly targetId:

        string;



    readonly message:

        string;



    readonly createdAt:

        Date;


}
