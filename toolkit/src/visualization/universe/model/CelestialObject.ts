import type { HealthState } from "./HealthState.js";


export type CelestialObjectType =

    | "star"
    | "planet"
    | "moon"
    | "satellite";



export interface CelestialObject {


    readonly id: string;


    readonly name: string;


    readonly type:

        CelestialObjectType;



    readonly parentId?:

        string;



    readonly importance:

        number;



    readonly health:

        HealthState;



    readonly orbit?: {


        radius: number;


        angle: number;


    };



    readonly position: {


        x: number;


        y: number;


        z: number;


    };


}
