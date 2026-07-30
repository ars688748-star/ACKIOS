import type { GalaxyScene } from "../model/GalaxyScene.js";

import type { GalaxyCameraState } from "../camera/GalaxyCameraState.js";

import type { GalaxyViewport } from "../camera/GalaxyViewport.js";

import type { GalaxyRenderContext } from "./GalaxyRenderContext.js";

import { GalaxyNodeRenderer } from "../renderer/GalaxyNodeRenderer.js";

import { GalaxyEdgeRenderer } from "../renderer/GalaxyEdgeRenderer.js";



export class GalaxyFrameRenderer {


    private readonly nodeRenderer =
        new GalaxyNodeRenderer();



    private readonly edgeRenderer =
        new GalaxyEdgeRenderer();



    public render(

        scene: GalaxyScene,

        camera: GalaxyCameraState,

        viewport: GalaxyViewport

    ): GalaxyRenderContext {


        return {

            scene,

            camera,

            frame: 0,

            timestamp: Date.now()

        };


    }


}
