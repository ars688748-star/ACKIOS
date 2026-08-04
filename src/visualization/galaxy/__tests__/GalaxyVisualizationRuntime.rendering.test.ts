import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime Rendering",
    () => {


        test(
            "starts and stops render loop",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                expect(
                    galaxy.isRendering()
                ).toBe(false);



                galaxy.startRendering();



                expect(
                    galaxy.isRendering()
                ).toBe(true);



                galaxy.stopRendering();



                expect(
                    galaxy.isRendering()
                ).toBe(false);


            }
        );


    }
);
