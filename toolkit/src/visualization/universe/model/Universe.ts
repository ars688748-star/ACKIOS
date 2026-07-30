import type { CelestialObject } from "./CelestialObject.js";


export interface Universe {


    readonly id: string;


    readonly name: string;



    readonly objects:

        CelestialObject[];



    readonly createdAt:

        Date;


}
