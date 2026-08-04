import { describe, expect, test } from "vitest";

import { GalaxyEventBus } from "../GalaxyEventBus.js";


describe(
    "GalaxyEventBus",
    () => {


        test(
            "delivers published events to subscribers",
            () => {


                const bus =
                    new GalaxyEventBus();



                let received:
                    unknown;



                bus.subscribe(
                    "NODE_SELECTED",
                    (event) => {

                        received =
                            event;

                    }
                );



                const event = {

                    type: "NODE_SELECTED" as const,

                    timestamp: new Date(),

                    payload: {

                        nodeId: "runtime"

                    }

                };



                bus.publish(
                    event
                );



                expect(
                    received
                ).toBeDefined();



                expect(
                    received
                ).toEqual(
                    event
                );


            }
        );


    }
);
