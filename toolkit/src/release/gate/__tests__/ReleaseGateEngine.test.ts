import { describe, expect, test } from "vitest";

import { ReleaseGateEngine } from "../ReleaseGateEngine.js";



describe(

    "ReleaseGateEngine",

    () => {


        test(

            "passes final release gate",

            () => {


                const engine =

                    new ReleaseGateEngine();



                const report =

                    engine.run();



                expect(

                    report.ready

                ).toBe(true);



            }

        );


    }

);
