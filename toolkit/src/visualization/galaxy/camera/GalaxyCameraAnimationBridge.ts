import type { GalaxyNode } from "../model/GalaxyNode.js";

import { GalaxyCameraController } from "./GalaxyCameraController.js";

import { GalaxyAnimationEngine } from "../animation/GalaxyAnimationEngine.js";



export class GalaxyCameraAnimationBridge {


    public constructor(

        private readonly camera:

            GalaxyCameraController,


        private readonly animation:

            GalaxyAnimationEngine

    ) {}



    public focus(

        node: GalaxyNode

    ): void {


        const current =

            this.camera.getState();



        this.animation.start(

            current.target,

            {

                x: node.position.x,

                y: node.position.y,

                z: node.position.z ?? 0

            },

            1000

        );



        this.camera.focus(
            node
        );


    }



    public update(

        progress: number

    ): void {


        this.animation.update(
            progress
        );


    }



    public getAnimationState() {

        return this.animation.getState();

    }



}
