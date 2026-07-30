import { GalaxyCameraController } from "./GalaxyCameraController.js";

import { GalaxyCameraTransition } from "./GalaxyCameraTransition.js";



export class GalaxyCameraTransitionBridge {



    public constructor(

        private readonly camera:
            GalaxyCameraController,

        private readonly transition:
            GalaxyCameraTransition

    ) {}



    public update(

        progress: number

    ): void {


        this.transition.update(
            progress
        );


        const state =
            this.transition.getState();



        if (!state) {

            return;

        }



        this.camera.applyState(
            state
        );


    }



    public isActive(): boolean {


        return this.transition.isActive();


    }


}
