import { describe, expect, test } from "vitest";

import { UniverseTickEngine } from "../UniverseTickEngine.js";


describe(
    "UniverseTickEngine",
    () => {


        test(
            "creates tick delta",
            () => {


                const engine =

                    new UniverseTickEngine();



                const result =

                    engine.tick();



                expect(

                    result.delta

                ).toBeDefined();



                expect(

                    result.updatedAt

                ).toBeInstanceOf(

                    Date

                );


            }
        );


    }
);
