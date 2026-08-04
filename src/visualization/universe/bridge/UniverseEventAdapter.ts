import type { UniverseEvent } from "../events/UniverseEvent.js";



export interface BrainEvent {


    readonly id:

        string;



    readonly type:

        string;



    readonly targetId:

        string;



    readonly message:

        string;


}





export class UniverseEventAdapter {



    public adapt(

        event: BrainEvent

    ): UniverseEvent {



        return {


            id:

                event.id,


            type:

                event.type as UniverseEvent["type"],


            targetId:

                event.targetId,


            message:

                event.message,


            createdAt:

                new Date()


        };


    }


}
