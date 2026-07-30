import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "Galaxy Core Integration",
    () => {


        test(
            "initializes complete galaxy visualization core",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                galaxy.initialize();



                expect(
                    galaxy.sceneRuntime
                ).toBeDefined();



                expect(
                    galaxy.runtimeSync
                ).toBeDefined();



                expect(
                    galaxy.camera
                ).toBeDefined();



                expect(
                    galaxy.animation
                ).toBeDefined();



                expect(
                    galaxy.events
                ).toBeDefined();



                galaxy.cameraAnimation.focus({

                    id: "node-1",

                    name: "Runtime",

                    position: {

                        x: 10,

                        y: 20,

                        z: 30

                    }

                });



                galaxy.updateAnimation(
                    0.5
                );



                const animationState =
                    galaxy.animation.getState();



                expect(
                    animationState
                ).toBeDefined();



                expect(
                    animationState?.progress
                ).toBe(
                    0.5
                );



                expect(
                    animationState?.status
                ).toBe(
                    "RUNNING"
                );


            }
        );


    }
);
