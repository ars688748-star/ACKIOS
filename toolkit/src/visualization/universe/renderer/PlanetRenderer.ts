import type { CelestialObject } from "../model/CelestialObject.js";


export interface PlanetRenderObject {


    readonly id:

        string;



    readonly type:

        "planet";



    readonly position:

        {

            x:number;

            y:number;

            z:number;

        };



    readonly scale:

        number;



    readonly health:

        string;



    readonly orbit?:

        {

            radius:number;

            angle:number;

        };



}



export class PlanetRenderer {



    public render(

        object: CelestialObject

    ): PlanetRenderObject {



        return {


            id:

                object.id,


            type:

                "planet",


            position:

                object.position,


            scale:

                Math.max(

                    object.importance,

                    1

                ),


            health:

                object.health,


            orbit:

                object.orbit


        };


    }


}
