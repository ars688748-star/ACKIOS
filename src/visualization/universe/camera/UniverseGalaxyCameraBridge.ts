import type { CameraFocusRequest } from "./CameraFocusRequest.js";

import type { GalaxyCameraController } from "../../galaxy/camera/GalaxyCameraController.js";

import type { GalaxyCameraTransition } from "../../galaxy/camera/GalaxyCameraTransition.js";

import type { GalaxyCameraState } from "../../galaxy/camera/GalaxyCameraState.js";


export class UniverseGalaxyCameraBridge {


    public constructor(

        private readonly camera:
            GalaxyCameraController,

        private readonly transition:
            GalaxyCameraTransition

    ) {}



    public focus(

        request: CameraFocusRequest

    ): void {


        const current =

            this.camera.getState();



        const target: GalaxyCameraState = {


            position: {

                x: current.position.x,

                y: current.position.y,

                z: current.position.z

            },


            target: {

                x: 0,

                y: 0,

                z: 0

            },


            zoom:

                request.priority === "critical"

                    ? 3

                    : 2,


            rotation:

                current.rotation


        };



        this.transition.start(

            current,

            target,

            1000

        );


    }


}
