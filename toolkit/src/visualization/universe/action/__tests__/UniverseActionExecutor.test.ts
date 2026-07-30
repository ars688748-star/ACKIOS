import { describe, expect, test } from "vitest";

import { UniverseActionExecutor } from "../UniverseActionExecutor.js";


describe(
    "UniverseActionExecutor",
    () => {


        test(
            "executes action",
            () => {


                const executor =

                    new UniverseActionExecutor();



                const result =

                    executor.execute({


                        type:

                            "animation",


                        targetId:

                            "planet-1",


                        payload:{}


                    });



                expect(

                    result.executed

                ).toBe(true);


            }
        );


    }
);
