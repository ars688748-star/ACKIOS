import { BrainEventReactionMapper } from "./BrainEventReactionMapper.js";



export class UniverseReactionEngine {



    private readonly mapper =

        new BrainEventReactionMapper();





    public react(

        eventType:string

    ) {



        const rule =

            this.mapper.resolve(

                eventType

            );



        return rule?.reaction;


    }


}
