import type { UniverseEvent } from "../../events/UniverseEvent.js";

import { CameraIntelligenceRuntime } from "../intelligence/CameraIntelligenceRuntime.js";

import { CameraFocusExecutor } from "./CameraFocusExecutor.js";



export class CameraAutoFocusRuntime {



    private readonly intelligence =

        new CameraIntelligenceRuntime();





    public constructor(

        private readonly executor:

            CameraFocusExecutor


    ) {}





    public process(

        event: UniverseEvent

    ): void {



        const decision =

            this.intelligence.evaluate(

                event

            );



        this.executor.execute(

            decision

        );


    }


}
