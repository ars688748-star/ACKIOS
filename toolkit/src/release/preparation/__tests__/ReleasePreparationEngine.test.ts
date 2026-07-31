import { describe, expect, test } from "vitest";

import { ReleasePreparationEngine } from "../ReleasePreparationEngine.js";



describe(

    "ReleasePreparationEngine",

    () => {


        test(

            "creates release manifest",

            () => {


                const engine =

                    new ReleasePreparationEngine();



                const manifest =

                    engine.prepare();



                expect(

                    manifest.version

                ).toBe(

                    "1.0.0"

                );


            }

        );


    }

);
