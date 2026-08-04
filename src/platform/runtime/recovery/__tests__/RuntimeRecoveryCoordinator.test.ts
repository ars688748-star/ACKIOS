import { describe, expect, it } from "vitest";
import { RuntimeRecoveryCoordinator } from "../RuntimeRecoveryCoordinator.js";


describe(
    "RuntimeRecoveryCoordinator",
    () => {


        it(
            "delegates recovery execution",
            async () => {


                const coordinator =
                    new RuntimeRecoveryCoordinator(

                        {

                            recover:
                                async () =>
                                    "Resume runtime lifecycle"

                        } as any

                    );



                const result =
                    await coordinator.recover();



                expect(
                    result
                )
                .toBe(
                    "Resume runtime lifecycle"
                );


            }
        );


    }
);
