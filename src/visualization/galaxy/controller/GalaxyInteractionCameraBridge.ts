import type { GalaxyNode } from "../model/GalaxyNode.js";

import { GalaxyInteractionController } from "./GalaxyInteractionController.js";
import { GalaxyCameraController } from "../camera/GalaxyCameraController.js";


export class GalaxyInteractionCameraBridge {


    public constructor(

        private readonly interaction:
            GalaxyInteractionController,

        private readonly camera:
            GalaxyCameraController

    ) {}



    public focusSelectedNode(): void {


        const node =
            this.interaction.getSelectedNode();



        if (!node) {

            return;

        }



        this.camera.focus(
            node
        );

    }



    public selectAndFocus(
        node: GalaxyNode
    ): void {


        this.interaction.selectNode(
            node
        );


        this.camera.focus(
            node
        );

    }


}
