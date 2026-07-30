import type { GalaxyViewport } from "../camera/GalaxyViewport.js";

import type { GalaxyCameraController } from "../camera/GalaxyCameraController.js";

import type { GalaxyInteractionState } from "./GalaxyInteractionState.js";



export class GalaxyInteractionViewportBridge {



    public sync(

        viewport: GalaxyViewport,

        camera: GalaxyCameraController,

        state: GalaxyInteractionState

    ): GalaxyViewport {


        return {


            ...viewport,


            camera: camera.getState(),


            zoom: state.zoom,


            active: true


        };


    }



}
