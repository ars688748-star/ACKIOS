import type { UniverseAction } from "./UniverseAction.js";



export class UniverseActionExecutor {



    public execute(

        action:UniverseAction

    ){



        return {


            executed:

                true,


            action


        };


    }


}
