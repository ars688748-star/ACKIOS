import { describe, expect, test } from "vitest";

import { ACKIOSRuntimeBuilder } from "../ACKIOSRuntimeBuilder.js";

import type { DashboardService } from "../../dashboard/core/DashboardService.js";



describe(
    "Dashboard Runtime Integration",
    () => {


        test(
            "provides dashboard service",
            async () => {


                const runtime =

                    new ACKIOSRuntimeBuilder()

                        .build();



                await runtime.initialize();



                const dashboard =

                    runtime.getService<DashboardService>(

                        "dashboard"

                    );



                const widgets =

                    dashboard.widgets();



                expect(

                    dashboard

                ).toBeDefined();



                expect(

                    widgets.length

                ).toBeGreaterThan(0);



                expect(

                    widgets[0].id

                ).toBe(

                    "plugins"

                );


            }
        );


    }
);
