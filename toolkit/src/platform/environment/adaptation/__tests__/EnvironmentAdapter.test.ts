import { describe, expect, it } from "vitest";
import { EnvironmentAdapter } from "../EnvironmentAdapter.js";
import { RuntimeCompatibilityChecker } from "../RuntimeCompatibilityChecker.js";


describe(
    "EnvironmentAdapter",
    () => {


        it(
            "creates adaptation decision for supported runtime",
            () => {


                const checker =
                    new RuntimeCompatibilityChecker();



                const adapter =
                    new EnvironmentAdapter(
                        checker
                    );



                const environment =
                {

                    os:
                    {
                        platform:
                            "win32",

                        version:
                            "10",

                        architecture:
                            "x64"

                    },


                    hardware:
                    {

                        cpuCores:
                            8,

                        memoryGB:
                            16,

                        architecture:
                            "x64",

                        gpuAvailable:
                            false

                    },


                    runtime:
                    {

                        nodeVersion:
                            "v24"

                    }

                };



                const decision =
                    adapter.adapt(
                        environment
                    );



                expect(
                    decision
                )
                .toBeDefined();



                expect(
                    decision.compatible
                )
                .toBe(true);


            }
        );


    }
);
