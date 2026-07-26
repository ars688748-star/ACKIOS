import { describe, expect, it } from "vitest";
import { WindowsInstallationStrategy } from "../WindowsInstallationStrategy.js";


describe(
    "WindowsInstallationStrategy",
    () => {


        it(
            "handles windows platform",
            () => {


                const strategy =
                    new WindowsInstallationStrategy();



                const context =
                {

                    platform:
                        "win32"

                } as any;



                expect(
                    strategy.canHandle(
                        context
                    )
                )
                .toBe(true);


            }
        );



        it(
            "returns successful installation result",
            async () => {


                const strategy =
                    new WindowsInstallationStrategy();



                const result =
                    await strategy.install(
                    {

                        platform:
                            "win32"

                    } as any
                );



                expect(
                    result.success
                )
                .toBe(true);



                expect(
                    result.strategy
                )
                .toBe("windows");


            }
        );


    }
);
