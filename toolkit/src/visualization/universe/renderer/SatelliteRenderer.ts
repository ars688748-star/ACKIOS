import type { CelestialObject } from "../model/CelestialObject.js";


export interface SatelliteRenderObject {


    readonly id:

        string;



    readonly type:

        "satellite";



    readonly position:

        {

            x:number;

            y:number;

            z:number;

        };



    readonly parentId?:

        string;



}



export class SatelliteRenderer {



    public render(

        object: CelestialObject

    ): SatelliteRenderObject {


        return {


            id:

                object.id,


            type:

                "satellite",


            position:

                object.position,


            parentId:

                object.parentId


        };


    }


}
