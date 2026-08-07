import { describe, expect, test } from "vitest";

import { ACKIOSRuntimeBuilder } from "../ACKIOSRuntimeBuilder.js";

import type { DashboardController } from "../../dashboard/api/DashboardController.js";


describe(
    "Dashboard Controller Runtime Integration",
    () => {


        test(
            "provides dashboard controller service",
            async () => {


                const runtime =

                    new ACKIOSRuntimeBuilder()

                        .build();



                await runtime.initialize();



                const controller =

                    runtime.getService<DashboardController>(

                        "dashboardController"

                    );



                const result =

                    await controller.getDashboard();



                expect(

                    controller

                ).toBeDefined();



                expect(

                    result.widgets.length

                ).toBeGreaterThan(0);



                expect(

                    result.widgets[0].id

                ).toBe(

                    "plugins"

                );


                expect(

                    result.widgets[1].id

                ).toBe(

                    "architecture"

                );


                expect(

                    result.widgets[2].id

                ).toBe(

                    "health"

                );


                expect(

                    result.widgets[3].id

                ).toBe(

                    "brain"

                );


                expect(

                    result.widgets[4].id

                ).toBe(

                    "cognition"

                );


                expect(

                    result.widgets[5].id

                ).toBe(

                    "intelligence"

                );


                expect(

                    result.widgets.length

                ).toBe(

                    6

                );


            }
        );


    }
);



