import { describe, expect, it } from "vitest";
import { RuntimeRecoveryExecutor } from "../RuntimeRecoveryExecutor.js";


describe(
    "RuntimeRecoveryExecutor",
    () => {


        const executor =
            new RuntimeRecoveryExecutor();



        it(
            "executes restart recovery",
            () => {

                expect(
                    executor.execute(
                        "restart"
                    )
                )
                .toBe(
                    "Restart runtime installation"
                );

            }
        );



        it(
            "executes resume recovery",
            () => {

                expect(
                    executor.execute(
                        "resume"
                    )
                )
                .toBe(
                    "Resume runtime lifecycle"
                );

            }
        );



        it(
            "executes continue recovery",
            () => {

                expect(
                    executor.execute(
                        "continue"
                    )
                )
                .toBe(
                    "Continue first run flow"
                );

            }
        );



        it(
            "handles ready runtime",
            () => {

                expect(
                    executor.execute(
                        "ready"
                    )
                )
                .toBe(
                    "Runtime already ready"
                );

            }
        );


    }
);
