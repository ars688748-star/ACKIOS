import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime Camera Transition",
    () => {


        test(
            "starts camera transition when selecting node",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                const node = {

                    id: "core",

                    position: {

                        x: 50,

                        y: 25,

                        z: 10

                    }

                } as any;



                galaxy.selectNode(
                    node
                );



                expect(
                    galaxy.cameraTransition.isActive()
                ).toBe(true);



            }
        );


    }
);
