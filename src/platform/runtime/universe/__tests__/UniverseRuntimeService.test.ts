import { describe, expect, test } from "vitest";

import { UniverseRuntimeService } from "../UniverseRuntimeService.js";

import { DefaultUniverseRuntimeAdapter } from "../UniverseRuntimeAdapter.js";


describe(
    "UniverseRuntimeService",
    () => {


        test(
            "controls runtime",
            () => {


                const service =

                    new UniverseRuntimeService(

                        new DefaultUniverseRuntimeAdapter()

                    );



                service.start();



                expect(

                    service.getStatus()

                ).toBe(

                    "running"

                );


            }
        );


    }
);
