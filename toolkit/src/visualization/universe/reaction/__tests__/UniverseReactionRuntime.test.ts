import { describe, expect, test } from "vitest";

import { UniverseReactionRuntime } from "../UniverseReactionRuntime.js";


describe(
    "UniverseReactionRuntime",
    () => {


        test(
            "creates reaction",
            () => {


                const runtime =

                    new UniverseReactionRuntime();



                const result =

                    runtime.process(

                        "planet-alert"

                    );



                expect(

                    result.reaction

                ).toBe(

                    "critical"

                );


            }
        );


    }
);
