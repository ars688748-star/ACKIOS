import { describe, expect, test } from "vitest";

import { UniverseRuntime } from "../UniverseRuntime.js";

import { PlanetHealthVisualizer } from "../../visual/PlanetHealthVisualizer.js";

import { PlanetPulseAnimation } from "../../animation/PlanetPulseAnimation.js";

import { UniverseCameraController } from "../../camera/UniverseCameraController.js";



describe(
    "UniverseRuntime",
    () => {


        test(
            "processes critical planet alert",
            () => {


                const visualizer =
                    new PlanetHealthVisualizer();



                const animation =
                    new PlanetPulseAnimation();



                const camera =
                    new UniverseCameraController();



                const runtime =
                    new UniverseRuntime(
                        visualizer,
                        animation,
                        camera
                    );



                runtime.process({

                    id: "event-1",

                    type: "planet-alert",

                    targetId: "memory-engine",

                    message: "architecture failure",

                    createdAt: new Date(),

                    health: "critical",

                    source: "architecture-analyzer"

                });



                expect(

                    camera.getCurrentFocus()

                ).toBeDefined();



                expect(

                    camera.getCurrentFocus()?.targetId

                ).toBe(

                    "memory-engine"

                );


            }
        );


    }
);
