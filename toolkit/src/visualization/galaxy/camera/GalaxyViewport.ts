import type { GalaxyCameraState } from "./GalaxyCameraState.js";


export interface GalaxyViewport {


    width: number;


    height: number;


    camera: GalaxyCameraState;


    zoom: number;


    active: boolean;


}
