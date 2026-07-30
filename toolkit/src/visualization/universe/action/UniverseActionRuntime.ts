import { UniverseActionExecutor } from "./UniverseActionExecutor.js";



export class UniverseActionRuntime {



    private readonly executor =

        new UniverseActionExecutor();





    public run(

        action:any

    ){


        return this.executor.execute(

            action

        );


    }


}
