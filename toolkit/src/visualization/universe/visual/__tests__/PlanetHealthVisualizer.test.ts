import { describe, expect, test } from "vitest";

import { PlanetHealthVisualizer } from "../PlanetHealthVisualizer.js";


describe(
    "PlanetHealthVisualizer",
    () => {


        const visualizer =
            new PlanetHealthVisualizer();



        test(
            "maps healthy state to stable",
            () => {


                expect(

                    visualizer.resolve(
                        "healthy"
                    )

                ).toBe(
                    "stable"
                );


            }
        );



        test(
            "maps warning state to pulse",
            () => {


                expect(

                    visualizer.resolve(
                        "warning"
                    )

                ).toBe(
                    "pulse"
                );


            }
        );



        test(
            "maps critical state to danger",
            () => {


                expect(

                    visualizer.resolve(
                        "critical"
                    )

                ).toBe(
                    "danger"
                );


            }
        );


    }
);
