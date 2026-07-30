export type GalaxyAnimationStatus =

    | "IDLE"

    | "RUNNING"

    | "COMPLETED";



export interface GalaxyAnimationState {


    readonly from: {

        x: number;

        y: number;

        z: number;

    };


    readonly to: {

        x: number;

        y: number;

        z: number;

    };


    readonly progress: number;


    readonly duration: number;


    readonly status: GalaxyAnimationStatus;


}
