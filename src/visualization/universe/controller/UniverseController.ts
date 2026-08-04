import type { Universe } from "../model/Universe.js";

import type { UniverseEvent } from "../events/UniverseEvent.js";


import { UniverseLiveRuntime } from "../tick/UniverseLiveRuntime.js";



export class UniverseController {



    public constructor(

        private readonly liveRuntime:

            UniverseLiveRuntime


    ) {}





    public update(

        universe: Universe

    ) {



        return this.liveRuntime.update(

            universe

        );


    }





    public dispatchEvent(

        event: UniverseEvent

    ): UniverseEvent {



        return event;


    }



}
