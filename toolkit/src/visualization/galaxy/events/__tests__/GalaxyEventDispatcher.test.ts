import { describe, expect, test } from "vitest";

import { GalaxyEventDispatcher } from "../GalaxyEventDispatcher.js";


describe(
    "GalaxyEventDispatcher",
    () => {


        test(
            "dispatches events to registered handlers",
            () => {


                const dispatcher =
                    new GalaxyEventDispatcher();



                let received:
                    unknown;



                dispatcher.register(

                    "CAMERA_FOCUSED",

                    (event) => {

                        received =
                            event;

                    }

                );



                const event = {

                    type: "CAMERA_FOCUSED" as const,

                    timestamp: new Date(),

                    payload: {

                        nodeId: "runtime"

                    }

                };



                dispatcher.dispatch(
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
