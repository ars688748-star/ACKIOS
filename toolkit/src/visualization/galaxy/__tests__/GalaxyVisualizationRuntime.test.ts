import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime",
    () => {


        test(
            "initializes galaxy core facade",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                galaxy.initialize();



                expect(
                    galaxy.camera
                ).toBeDefined();



                expect(
                    galaxy.animation
                ).toBeDefined();



                expect(
                    galaxy.events
                ).toBeDefined();



                expect(
                    galaxy.sceneRuntime
                ).toBeDefined();



                expect(
                    galaxy.runtimeSync
                ).toBeDefined();


            }
        );


    }
);
