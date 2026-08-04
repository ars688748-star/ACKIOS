import type { UniverseAction } from "./UniverseAction.js";



export class ObjectStateAction {



    public create(

        targetId:string,

        state:string

    ):UniverseAction {



        return {


            type:

                "object-state",


            targetId,


            payload:


                {

                    state

                }


        };


    }


}
