import { describe, expect, test } from "vitest";

import { RuntimeModuleRegistry } from "../RuntimeModuleRegistry.js";


describe(
    "RuntimeModuleRegistry",
    () => {


        test(
            "stores modules",
            () => {


                const registry =

                    new RuntimeModuleRegistry();



                registry.add({


                    name:

                        "test",


                    start(){},


                    stop(){},


                    health(){

                        return "ok";

                    }


                });



                expect(

                    registry.count()

                ).toBe(1);


            }
        );


    }
);
