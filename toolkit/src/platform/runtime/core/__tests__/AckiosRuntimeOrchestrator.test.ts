import { describe, expect, test } from "vitest";

import { RuntimeOrchestratorFactory } from "../RuntimeOrchestratorFactory.js";



describe(
    "AckiosRuntimeOrchestrator",
    () => {



        test(
            "registers and starts modules",
            () => {


                const orchestrator =

                    RuntimeOrchestratorFactory.create();



                let started = false;



                orchestrator.register({


                    name:

                        "test-module",


                    start(){

                        started = true;

                    },


                    stop(){},


                    health(){

                        return "ok";

                    }


                });



                orchestrator.start();



                expect(

                    started

                ).toBe(true);



            }
        );



    }
);
