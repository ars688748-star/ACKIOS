import { describe, expect, it } from "vitest";
import { PlatformInstallationOrchestrator } from "../PlatformInstallationOrchestrator.js";


describe(
    "PlatformInstallationOrchestrator",
    () => {


        it(
            "creates installation context from runtime environment",
            async () => {


                const installer =
                {

                    install:
                        async (context: any) => {

                            return {

                                success:
                                    true,

                                message:
                                    "installed",

                                context

                            };

                        }

                };



                const stateManager =
                {

                    save:
                        async () => {}

                };



                const orchestrator =
                    new PlatformInstallationOrchestrator(
                        installer as any,
                        stateManager as any
                    );



                const result =
                    await orchestrator.install(

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
                                    "v22"

                            }

                        },

                        "./ackios",

                        "1.0.0"

                    );



                expect(
                    result.success
                )
                .toBe(true);



                expect(
                    result.context?.platform
                )
                .toBe("win32");


            }
        );


    }
);
