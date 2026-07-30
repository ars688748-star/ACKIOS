import type { GalaxyScene } from "../model/GalaxyScene.js";

import type { GalaxyCameraState } from "../camera/GalaxyCameraState.js";


export interface GalaxyRenderContext {


    scene:

        GalaxyScene;



    camera:

        GalaxyCameraState;



    frame:

        number;



    timestamp:

        number;


}
