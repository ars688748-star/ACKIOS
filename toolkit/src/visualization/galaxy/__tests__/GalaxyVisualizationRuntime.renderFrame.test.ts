import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime Render Frame",
    () => {


        test(
            "creates render context from scene",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                const scene =
                    {} as any;



                const context =
                    galaxy.renderFrame(
                        scene
                    );



                expect(
                    context.scene
                ).toBe(
                    scene
                );



                expect(
                    context.camera
                ).toBeDefined();



                expect(
                    context.timestamp
                ).toBeGreaterThan(0);


            }
        );


    }
);
