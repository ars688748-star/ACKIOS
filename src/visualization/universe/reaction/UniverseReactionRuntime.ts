import { UniverseReactionEngine } from "./UniverseReactionEngine.js";



export class UniverseReactionRuntime {



    private readonly engine =

        new UniverseReactionEngine();





    public process(

        eventType:string

    ) {



        return {


            reaction:

                this.engine.react(

                    eventType

                )


        };


    }


}
