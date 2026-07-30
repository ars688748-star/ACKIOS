import { describe, expect, test } from "vitest";

import { RuntimeDiscovery } from "../RuntimeDiscovery.js";


describe(
    "RuntimeDiscovery",
    () => {


        test(
            "discovers modules",
            () => {


                const discovery =

                    new RuntimeDiscovery();



                const result =

                    discovery.discover([

                        {

                            name:

                                "module",


                            start(){},


                            stop(){},


                            health(){

                                return "ok";

                            }

                        }

                    ]);



                expect(

                    result.length

                ).toBe(1);


            }
        );


    }
);
