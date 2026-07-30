import type { GalaxyScene } from "../model/GalaxyScene.js";

import type { GalaxyCameraState } from "../camera/GalaxyCameraState.js";

import type { GalaxyVisualScene } from "../renderer/GalaxyVisualScene.js";


export interface GalaxyRenderContext {


    scene:

        GalaxyScene;



    visualScene:

        GalaxyVisualScene;



    camera:

        GalaxyCameraState;



    frame:

        number;



    timestamp:

        number;


}

