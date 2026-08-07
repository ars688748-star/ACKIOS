import { describe, expect, test } from "vitest";

import { ArchitectureDashboardWidget } from "../ArchitectureDashboardWidget.js";

import { ArchitectureWidgetService } from "../ArchitectureWidgetService.js";



describe(
    "ArchitectureDashboardWidget",
    () => {


        test(
            "provides architecture dashboard data",
            async () => {


                const service = {


                    async getWidget(){

                        return {

                            nodes:10,

                            dependencies:20,

                            status:"healthy"

                        };

                    }


                } as ArchitectureWidgetService;



                const widget =

                    new ArchitectureDashboardWidget(

                        service

                    );



                const data =

                    await widget.getData();



                expect(

                    widget.id

                ).toBe(

                    "architecture"

                );



                expect(

                    widget.title

                ).toBe(

                    "Architecture"

                );



                expect(

                    data.nodes

                ).toBe(

                    10

                );


            }
        );


    }
);
