import { describe, expect, it } from "vitest";
import { RuntimeRecoveryService } from "../RuntimeRecoveryService.js";
import { RuntimeRecoveryManager } from "../RuntimeRecoveryManager.js";
import { RuntimeRecoveryExecutor } from "../RuntimeRecoveryExecutor.js";


describe(
    "RuntimeRecoveryService",
    () => {


        it(
            "recovers installed runtime",
            async () => {


                const service =
                    new RuntimeRecoveryService(

                        {

                            load:
                                async () => ({

                                    initialized: false,

                                    installed: true,

                                    workspaceReady: true,

                                    ready: false,

                                    stage:
                                        "installed"

                                })

                        } as any,


                        new RuntimeRecoveryManager(),


                        new RuntimeRecoveryExecutor()

                    );



                const result =
                    await service.recover();



                expect(
                    result
                )
                .toBe(
                    "Resume runtime lifecycle"
                );


            }
        );



        it(
            "restarts when state is missing",
            async () => {


                const service =
                    new RuntimeRecoveryService(

                        {

                            load:
                                async () => null

                        } as any,


                        new RuntimeRecoveryManager(),


                        new RuntimeRecoveryExecutor()

                    );



                const result =
                    await service.recover();



                expect(
                    result
                )
                .toBe(
                    "Restart runtime installation"
                );


            }
        );


    }
);
