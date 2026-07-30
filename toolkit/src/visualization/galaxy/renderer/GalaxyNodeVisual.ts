import type { GalaxyNode } from "../model/GalaxyNode.js";


export interface GalaxyNodeVisual {


    id: string;


    source: GalaxyNode;


    position: {

        x: number;

        y: number;

        z: number;

    };


    radius: number;


    selected: boolean;


}
