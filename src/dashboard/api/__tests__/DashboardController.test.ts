import { describe, expect, test } from "vitest";

import { DashboardRegistry } from "../../core/DashboardRegistry.js";

import { DashboardService } from "../../core/DashboardService.js";

import { DashboardController } from "../DashboardController.js";



describe(

    "DashboardController",

    () => {


        test(

            "returns dashboard view",

            () => {


                const registry =

                    new DashboardRegistry();



                registry.register({

                    id:"plugins",

                    title:"Plugins",

                    getData(){

                        return {

                            count:1

                        };

                    }

                });



                const service =

                    new DashboardService(

                        registry

                    );



                const controller =

                    new DashboardController(

                        service

                    );



                const dashboard =

                    controller.getDashboard();



                expect(

                    dashboard.widgets.length

                ).toBe(1);



                expect(

                    dashboard.widgets[0].id

                ).toBe(

                    "plugins"

                );


            }

        );


    }

);
