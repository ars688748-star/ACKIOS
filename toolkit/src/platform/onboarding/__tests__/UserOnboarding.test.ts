import { describe, expect, it } from "vitest";
import { UserOnboarding } from "../UserOnboarding.js";


describe(
    "UserOnboarding",
    () => {


        it(
            "completes user onboarding",
            async () => {


                const onboarding =
                    new UserOnboarding();


                const result =
                    await onboarding.run(
                        "./workspace",
                        "user"
                    );


                expect(
                    result.success
                )
                .toBe(true);


                expect(
                    result.context?.workspaceSelected
                )
                .toBe(true);


                expect(
                    result.context?.completed
                )
                .toBe(true);


            }
        );


    }
);
