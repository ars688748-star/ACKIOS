import type { UniverseAction } from "./UniverseAction.js";



export class CameraAction {



    public create(

        targetId:string

    ):UniverseAction {



        return {


            type:

                "camera-focus",


            targetId,


            payload:


                {

                    priority:

                        "critical"

                }


        };


    }


}
