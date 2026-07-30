import type { CelestialObject } from "../model/CelestialObject.js";


export interface StarRenderObject {


    readonly id:

        string;



    readonly type:

        "star";



    readonly position:

        {

            x:number;

            y:number;

            z:number;

        };



    readonly scale:

        number;



    readonly glow:

        boolean;



}



export class StarRenderer {



    public render(

        object: CelestialObject

    ): StarRenderObject {



        return {


            id:

                object.id,


            type:

                "star",


            position:

                object.position,


            scale:

                Math.max(

                    object.importance,

                    1

                ),


            glow:

                true


        };


    }


}
