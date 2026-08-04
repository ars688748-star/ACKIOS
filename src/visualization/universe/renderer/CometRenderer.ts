import type { CelestialObject } from "../model/CelestialObject.js";


export interface CometRenderObject {


    readonly id:

        string;



    readonly type:

        "comet";



    readonly position:

        {

            x:number;

            y:number;

            z:number;

        };



    readonly trail:

        boolean;



}



export class CometRenderer {



    public render(

        object: CelestialObject

    ): CometRenderObject {


        return {


            id:

                object.id,


            type:

                "comet",


            position:

                object.position,


            trail:

                true


        };


    }


}
