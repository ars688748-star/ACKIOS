import { describe, expect, test } from "vitest";

import { PlanetPulseAnimation } from "../PlanetPulseAnimation.js";


describe(
    "PlanetPulseAnimation",
    () => {


        const animation =
            new PlanetPulseAnimation();



        test(
            "idle mode has no intensity",
            () => {


                const result =
                    animation.resolve(
                        "idle"
                    );


                expect(
                    result.mode
                ).toBe(
                    "idle"
                );


                expect(
                    result.intensity
                ).toBe(
                    0
                );


            }
        );



        test(
            "pulse mode creates warning animation",
            () => {


                const result =
                    animation.resolve(
                        "pulse"
                    );


                expect(
                    result.mode
                ).toBe(
                    "pulse"
                );


                expect(
                    result.intensity
                ).toBe(
                    0.5
                );


            }
        );



        test(
            "danger mode creates critical animation",
            () => {


                const result =
                    animation.resolve(
                        "danger"
                    );


                expect(
                    result.mode
                ).toBe(
                    "danger"
                );


                expect(
                    result.intensity
                ).toBe(
                    1
                );


            }
        );


    }
);
