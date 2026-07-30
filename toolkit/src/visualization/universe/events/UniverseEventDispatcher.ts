import type { UniverseEvent } from "./UniverseEvent.js";

import type { Universe } from "../model/Universe.js";



export class UniverseEventDispatcher {



    public dispatch(

        event: UniverseEvent,

        universe: Universe

    ): Universe {



        const updatedObjects =

            universe.objects.map(

                object => {


                    if (

                        object.id !== event.targetId

                    ) {

                        return object;

                    }



                    return {

                        ...object,

                        health:

                            event.type === "planet-alert"

                                ? "critical"

                                : object.health


                    };


                }

            );



        return {


            ...universe,

            objects: updatedObjects


        };


    }


}
