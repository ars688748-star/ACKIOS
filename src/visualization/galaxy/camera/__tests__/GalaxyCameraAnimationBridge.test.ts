import { describe, expect, test } from "vitest";

import { GalaxyCameraController } from "../GalaxyCameraController.js";

import { GalaxyCameraAnimationBridge } from "../GalaxyCameraAnimationBridge.js";

import { GalaxyAnimationEngine } from "../../animation/GalaxyAnimationEngine.js";


describe(
    "GalaxyCameraAnimationBridge",
    () => {


        test(
            "starts camera animation when focusing node",
            () => {


                const camera =
                    new GalaxyCameraController();



                const animation =
                    new GalaxyAnimationEngine();



                const bridge =
                    new GalaxyCameraAnimationBridge(
                        camera,
                        animation
                    );



                const node = {

                    id: "node-1",

                    name: "Runtime",

                    position: {

                        x: 10,

                        y: 20,

                        z: 30

                    }

                };



                bridge.focus(
                    node
                );



                const animationState =
                    bridge.getAnimationState();



                expect(
                    animationState
                ).toBeDefined();



                expect(
                    animationState?.status
                ).toBe(
                    "RUNNING"
                );



                const cameraState =
                    camera.getState();



                expect(
                    cameraState.target
                ).toEqual({

                    x: 10,

                    y: 20,

                    z: 30

                });


            }
        );


    }
);
