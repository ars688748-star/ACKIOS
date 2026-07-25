import { describe, expect, it } from "vitest";
import { InstallerEngine } from "../InstallerEngine.js";
import { InstallationValidator } from "../InstallationValidator.js";


describe(
    "InstallerEngine",
    () => {


        it(
            "completes installation with valid environment",
            async () => {


                const validator: InstallationValidator =
                    {
                        validate:
                            async () => true
                    };


                const engine =
                    new InstallerEngine(
                        validator
                    );


                const result =
                    await engine.install(
                        {
                            installPath:
                                "./ackios",

                            version:
                                "1.0.0",

                            platform:
                                "test",

                            workspaceCreated:
                                false,

                            status:
                                "pending"
                        }
                    );


                expect(
                    result.success
                )
                .toBe(true);


                expect(
                    result.context?.status
                )
                .toBe("completed");


            }
        );


    }
);

