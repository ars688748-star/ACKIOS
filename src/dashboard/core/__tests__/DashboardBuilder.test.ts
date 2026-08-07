import { describe, expect, test } from "vitest";

import { DashboardBuilder } from "../DashboardBuilder.js";


describe(
    "DashboardBuilder",
    () => {


        test(
            "builds dashboard registry with plugins widget",
            () => {


                const provider = {


                    getPlugins(){

                        return [

                            {

                                id:"demo-gitlab",

                                name:"Demo GitLab Plugin",

                                version:"1.0.0",

                                status:"installed"

                            }

                        ];

                    }


                } as any;



                const dashboard =

                    new DashboardBuilder()

                        .build(

                            provider,

                            {} as any

                        );



                const widgets =

                    dashboard.list();



                expect(

                    widgets.length

                ).toBe(6);


                expect(

                    widgets[0].id

                ).toBe(

                    "plugins"

                );


                expect(

                    widgets[1].id

                ).toBe(

                    "architecture"

                );



                expect(

                    widgets[0].id

                ).toBe(

                    "plugins"

                );


            }
        );


    }
);


