import type { UniverseEvent } from "../../events/UniverseEvent.js";

import type { CameraFocusDecision } from "./CameraFocusDecision.js";



export class CameraIntelligence {



    public analyze(

        event: UniverseEvent

    ): CameraFocusDecision {



        if (

            event.type === "planet-alert"

        ) {



            return {


                level:

                    "critical",


                targetId:

                    event.targetId,


                reason:

                    event.message


            };


        }





        return {


            level:

                "none",


            reason:

                "No focus required"


        };


    }


}
