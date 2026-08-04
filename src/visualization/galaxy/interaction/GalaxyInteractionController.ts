import type { GalaxyNode } from "../model/GalaxyNode.js";

import type { GalaxyInteractionState } from "./GalaxyInteractionState.js";

import { GalaxyCameraController } from "../camera/GalaxyCameraController.js";



export class GalaxyInteractionController {


    private state: GalaxyInteractionState = {


        zoom: 1,


        mode: "IDLE"


    };



    public constructor(

        private readonly camera:
            GalaxyCameraController

    ) {}



    public selectNode(

        node: GalaxyNode

    ): void {


        this.state = {


            ...this.state,


            selectedNodeId: node.id,


            focusedNodeId: node.id,


            mode: "FOCUSING"


        };


        this.camera.focus(
            node
        );


    }



    public setZoom(

        zoom: number

    ): void {


        this.state = {


            ...this.state,


            zoom


        };


        this.camera.setZoom(
            zoom
        );


    }



    public getState():

        GalaxyInteractionState {


        return this.state;


    }


}
