import type { GalaxyEdge } from "../model/GalaxyEdge.js";


export interface GalaxyEdgeVisual {


    id: string;


    source: GalaxyEdge;


    from: string;


    to: string;


    type: string;


    active: boolean;


}
