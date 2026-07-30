import type { Universe } from "../model/Universe.js";

import type { UniverseEvent } from "../events/UniverseEvent.js";

import type { UniverseSceneState } from "./UniverseSceneState.js";


import { UniverseController } from "../controller/UniverseController.js";

import { CameraAutoFocusRuntime } from "../camera/focus/CameraAutoFocusRuntime.js";

import { CameraFocusExecutor } from "../camera/focus/CameraFocusExecutor.js";

import { UniverseCameraController } from "../camera/UniverseCameraController.js";



export class UniverseSceneRuntime {



    private readonly cameraController =

        new UniverseCameraController();



    private readonly focusRuntime =

        new CameraAutoFocusRuntime(

            new CameraFocusExecutor(

                this.cameraController

            )

        );





    public constructor(

        private readonly controller:

            UniverseController


    ) {}





    public update(

        universe: Universe

    ): UniverseSceneState {



        const rendered =

            this.controller.update(

                universe

            );



        return {


            renderedObjects:

                rendered.length,


            updatedAt:

                new Date()


        };


    }





    public processEvent(

        event: UniverseEvent

    ): void {



        this.controller.dispatchEvent(

            event

        );



        this.focusRuntime.process(

            event

        );


    }


}
