import { describe, expect, it } from "vitest";
import { RuntimeEventBus } from "../RuntimeEventBus.js";


describe(
    "RuntimeEventBus",
    () => {


        it(
            "publishes runtime events",
            async () => {


                const bus =
                    new RuntimeEventBus();


                let received =
                    false;


                bus.subscribe(
                    async () => {

                        received = true;

                    }
                );


                await bus.publish({

                    type:
                        "runtime.started",

                    timestamp:
                        new Date().toISOString()

                });


                expect(
                    received
                )
                .toBe(true);


            }
        );


    }
);
