import { describe, expect, test } from "vitest";

import { GalaxyCameraController } from "../GalaxyCameraController.js";

import { GalaxyCameraTransition } from "../GalaxyCameraTransition.js";

import { GalaxyCameraTransitionBridge } from "../GalaxyCameraTransitionBridge.js";


describe(
    "GalaxyCameraTransitionBridge",
    () => {


        test(
            "updates camera from transition state",
            () => {


                const camera =
                    new GalaxyCameraController();



                const transition =
                    new GalaxyCameraTransition();



                transition.start(

                    camera.getState(),

                    {

                        ...camera.getState(),

                        position: {

                            x: 100,

                            y: 50,

                            z: 20

                        }

                    },

                    1000

                );



                const bridge =
                    new GalaxyCameraTransitionBridge(

                        camera,

                        transition

                    );



                bridge.update(
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
