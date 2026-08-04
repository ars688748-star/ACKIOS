import { describe, expect, test } from "vitest";

import { UniverseKernelFactory } from "../UniverseKernelFactory.js";


describe(
    "UniverseRuntimeKernel",
    () => {


        test(
            "creates runtime kernel",
            () => {


                const kernel =

                    UniverseKernelFactory.create();



                expect(

                    kernel

                ).toBeDefined();


            }
        );


    }
);
