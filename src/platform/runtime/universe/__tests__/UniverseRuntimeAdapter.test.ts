import { describe, expect, test } from "vitest";

import { DefaultUniverseRuntimeAdapter } from "../UniverseRuntimeAdapter.js";


describe(
    "UniverseRuntimeAdapter",
    () => {


        test(
            "starts runtime",
            () => {


                const adapter =

                    new DefaultUniverseRuntimeAdapter();



                adapter.start();



                expect(

                    adapter.status()

                ).toBe(

                    "running"

                );


            }
        );


    }
);
