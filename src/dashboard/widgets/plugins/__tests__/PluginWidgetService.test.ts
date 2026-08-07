import { describe, expect, test } from "vitest";

import { PluginWidgetService } from "../PluginWidgetService.js";



describe(
    "PluginWidgetService",
    () => {


        test(
            "creates plugin dashboard widget",
            () => {


                const provider = {


                    getPlugins(){

                        return [

                            {

                                id: "demo-gitlab",

                                name: "Demo GitLab Plugin",

                                version: "1.0.0",

                                status: "installed"

                            }

                        ];

                    }


                } as any;



                const service =

                    new PluginWidgetService(

                        provider

                    );



                const widget =

                    service.getWidget();



                expect(

                    widget.title

                ).toBe(

                    "Plugins"

                );



                expect(

                    widget.count

                ).toBe(1);



                expect(

                    widget.plugins[0].id

                ).toBe(

                    "demo-gitlab"

                );


            }
        );


    }
);
