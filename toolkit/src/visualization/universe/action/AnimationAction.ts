import type { UniverseAction } from "./UniverseAction.js";



export class AnimationAction {



    public create(

        targetId:string

    ):UniverseAction {



        return {


            type:

                "animation",


            targetId,


            payload:


                {

                    animation:

                        "pulse"

                }


        };


    }


}
