import { describe, expect, it } from "vitest";
import { InstallationStrategySelector } from "../InstallationStrategySelector.js";
import { WindowsInstallationStrategy } from "../windows/WindowsInstallationStrategy.js";


describe(
    "InstallationStrategySelector",
    () => {


        it(
            "selects windows strategy",
            () => {


                const selector =
                    new InstallationStrategySelector([

                        new WindowsInstallationStrategy()

                    ]);


                const strategy =
                    selector.select({

                        platform:
                            "win32"

                    } as any);



                expect(strategy)
                    .toBeDefined();



                expect(strategy)
                    .toBeInstanceOf(
                        WindowsInstallationStrategy
                    );


            }
        );


    }
);
