import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime Viewport",
    () => {


        test(
            "creates viewport from camera state",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                const viewport =
                    galaxy.createViewport(
                        1920,
                        1080
                    );



                expect(
                    viewport.width
                ).toBe(
                    1920
                );



                expect(
                    viewport.height
                ).toBe(
                    1080
                );



                expect(
                    viewport.camera
                ).toBeDefined();



                expect(
                    galaxy.getViewport()
                ).toBe(
                    viewport
                );


            }
        );


    }
);
