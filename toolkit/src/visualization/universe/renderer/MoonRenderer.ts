import type { CelestialObject } from "../model/CelestialObject.js";


export interface MoonRenderObject {


    readonly id:

        string;



    readonly type:

        "moon";



    readonly position:

        {

            x:number;

            y:number;

            z:number;

        };



    readonly scale:

        number;



    readonly parentId?:

        string;



    readonly orbit?:

        {

            radius:number;

            angle:number;

        };


}



export class MoonRenderer {



    public render(

        object: CelestialObject

    ): MoonRenderObject {


        return {


            id:

                object.id,


            type:

                "moon",


            position:

                object.position,


            scale:

                Math.max(

                    object.importance,

                    0.5

                ),


            parentId:

                object.parentId,


            orbit:

                object.orbit


        };


    }


}
