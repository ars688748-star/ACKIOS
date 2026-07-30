import { describe, expect, test } from "vitest";

import { GalaxyAnimationEngine } from "../GalaxyAnimationEngine.js";


describe(
    "GalaxyAnimationEngine",
    () => {


        test(
            "runs animation lifecycle",
            () => {


                const engine =
                    new GalaxyAnimationEngine();



                engine.start(

                    {
                        x: 0,
                        y: 0,
                        z: 0
                    },

                    {
                        x: 10,
                        y: 10,
                        z: 10
                    },

                    1000

                );



                let state =
                    engine.getState();



                expect(
                    state
                ).toBeDefined();



                expect(
                    state?.status
                ).toBe(
                    "RUNNING"
                );



                engine.update(
                    0.5
                );



                state =
                    engine.getState();



                expect(
                    state?.progress
                ).toBe(
                    0.5
                );



                engine.update(
                    1
                );



                state =
                    engine.getState();



                expect(
                    state?.status
                ).toBe(
                    "COMPLETED"
                );


            }
        );


    }
);
