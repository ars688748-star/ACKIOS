import type { UniverseEvent } from "../../events/UniverseEvent.js";

import { CameraIntelligence } from "./CameraIntelligence.js";



export class CameraIntelligenceRuntime {



    private readonly intelligence =

        new CameraIntelligence();





    public evaluate(

        event: UniverseEvent

    ) {


        return this.intelligence.analyze(

            event

        );


    }


}
