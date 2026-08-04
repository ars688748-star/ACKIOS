import { describe, expect, it } from "vitest";
import { FirstRunCoordinator } from "../FirstRunCoordinator.js";
import { FirstRunState } from "../FirstRunState.js";


describe(
    "FirstRunCoordinator",
    () => {


        it(
            "completes first run flow",
            async () => {


                const state =
                    new FirstRunState();


                const wizard =
                {
                    run:
                        async () => ({
                            success: true
                        })
                };


                const onboarding =
                {
                    run:
                        async () => ({
                            success: true
                        })
                };


                const coordinator =
                    new FirstRunCoordinator(
                        state,
                        wizard as any,
                        onboarding as any
                    );


                const result =
                    await coordinator.run(
                        "./workspace",
                        "user"
                    );


                expect(
                    result
                )
                .toBe(true);


                expect(
                    state.isCompleted()
                )
                .toBe(true);


            }
        );


    }
);
