import { describe, expect, test } from "vitest";

import { DashboardRegistry } from "../DashboardRegistry.js";

import { DashboardService } from "../DashboardService.js";



describe(
    "DashboardService",
    () => {


        test(
            "provides dashboard widgets",
            () => {


                const registry =

                    new DashboardRegistry();



                registry.register({

                    id:"plugins",

                    title:"Plugins",

                    getData(){

                        return {};

                    }

                });



                const service =

                    new DashboardService(

                        registry

                    );



                const widgets =

                    service.widgets();



                expect(

                    widgets.length

                ).toBe(1);



                expect(

                    service.widget(

                        "plugins"

                    )

                ).toBeDefined();


            }
        );


    }
);
