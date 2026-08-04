import { GalaxyAnimationEngine } from "../animation/GalaxyAnimationEngine.js";

import { GalaxyCameraTransition } from "./GalaxyCameraTransition.js";

import { GalaxyCameraTransitionBridge } from "./GalaxyCameraTransitionBridge.js";

import type { GalaxyCameraState } from "./GalaxyCameraState.js";



export class GalaxyCameraAnimationRuntime {



    public constructor(

        private readonly animation:
            GalaxyAnimationEngine,


        private readonly transition:
            GalaxyCameraTransition,


        private readonly bridge:
            GalaxyCameraTransitionBridge

    ) {}



    public startTransition(

        from: GalaxyCameraState,

        to: GalaxyCameraState,

        duration: number

    ): void {


        this.transition.start(

            from,

            to,

            duration

        );


        this.animation.start(

            {
                x: 0,
                y: 0,
                z: 0
            },

            {
                x: 1,
                y: 1,
                z: 1
            },

            duration

        );


    }



    public update(

        progress: number

    ): void {


        this.animation.update(
            progress
        );


        const state =
            this.animation.getState();



        if (!state) {

            return;

        }



        this.transition.update(

            state.progress

        );



        this.bridge.update(

            state.progress

        );


    }



    public isActive(): boolean {


        return this.bridge.isActive();


    }


}
