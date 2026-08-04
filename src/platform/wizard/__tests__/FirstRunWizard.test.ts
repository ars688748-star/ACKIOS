import { describe, expect, it } from "vitest";
import { FirstRunWizard } from "../FirstRunWizard.js";


describe(
    "FirstRunWizard",
    () => {


        it(
            "completes first run setup",
            async () => {


                const wizard =
                    new FirstRunWizard();


                const result =
                    await wizard.run(
                        "./ackios",
                        "1.0.0"
                    );


                expect(
                    result.success
                )
                .toBe(true);


                expect(
                    result.context?.environmentDetected
                )
                .toBe(true);


                expect(
                    result.context?.workspaceReady
                )
                .toBe(true);


            }
        );


    }
);
