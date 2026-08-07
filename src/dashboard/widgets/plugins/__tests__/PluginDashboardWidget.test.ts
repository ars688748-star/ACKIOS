import { describe, expect, test } from "vitest";

import { PluginDashboardWidget } from "../PluginDashboardWidget.js";

import { PluginWidgetService } from "../PluginWidgetService.js";



describe(
    "PluginDashboardWidget",
    () => {


        test(
            "implements dashboard widget contract",
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



                const service =

                    new PluginWidgetService(

                        provider

                    );



                const widget =

                    new PluginDashboardWidget(

                        service

                    );



                const data =

                    widget.getData();



                expect(

                    widget.id

                ).toBe(

                    "plugins"

                );



                expect(

                    widget.title

                ).toBe(

                    "Plugins"

                );



                expect(

                    data

                ).toBeDefined();


            }
        );


    }
);
