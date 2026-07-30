import { describe, expect, test } from "vitest";

import { GalaxyAnimationEngine } from "../../animation/GalaxyAnimationEngine.js";

import { GalaxyCameraController } from "../GalaxyCameraController.js";

import { GalaxyCameraTransition } from "../GalaxyCameraTransition.js";

import { GalaxyCameraTransitionBridge } from "../GalaxyCameraTransitionBridge.js";

import { GalaxyCameraAnimationRuntime } from "../GalaxyCameraAnimationRuntime.js";



describe(
    "GalaxyCameraAnimationRuntime",
    () => {


        test(
            "updates camera through animation runtime",
            () => {


                const animation =
                    new GalaxyAnimationEngine();



                const camera =
                    new GalaxyCameraController();



                const transition =
                    new GalaxyCameraTransition();



                const bridge =
                    new GalaxyCameraTransitionBridge(

                        camera,

                        transition

                    );



                const runtime =
                    new GalaxyCameraAnimationRuntime(

                        animation,

                        transition,

                        bridge

                    );



                runtime.startTransition(

                    camera.getState(),

                    {

                        ...camera.getState(),

                        position: {

                            x: 100,

                            y: 0,

                            z: 50

                        }

                    },

                    1000

                );



                runtime.update(
                    0.5
                );



                expect(

                    camera.getState().position.x

                ).toBe(

                    50

                );


            }
        );


    }
);
