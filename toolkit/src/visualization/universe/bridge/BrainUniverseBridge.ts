import type { UniverseEvent } from "../events/UniverseEvent.js";

import { UniverseEventAdapter } from "./UniverseEventAdapter.js";



export interface UniverseEventReceiver {


    processEvent(

        event: UniverseEvent

    ): void;


}





export class BrainUniverseBridge {



    private readonly adapter =

        new UniverseEventAdapter();





    public constructor(

        private readonly receiver:

            UniverseEventReceiver


    ) {}





    public send(

        event:

            {

                id:string;

                type:string;

                targetId:string;

                message:string;

            }

    ): void {



        const universeEvent =

            this.adapter.adapt(

                event

            );



        this.receiver.processEvent(

            universeEvent

        );


    }


}
