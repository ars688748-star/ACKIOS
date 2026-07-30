import { describe, expect, test } from "vitest";

import { UniverseEventAdapter } from "../UniverseEventAdapter.js";


describe(
    "UniverseEventAdapter",
    () => {


        test(
            "converts brain event",
            () => {


                const adapter =

                    new UniverseEventAdapter();



                const result =

                    adapter.adapt({


                        id:

                            "1",


                        type:

                            "planet-alert",


                        targetId:

                            "project-1",


                        message:

                            "error"


                    });



                expect(

                    result.targetId

                ).toBe(

                    "project-1"

                );


            }
        );


    }
);
