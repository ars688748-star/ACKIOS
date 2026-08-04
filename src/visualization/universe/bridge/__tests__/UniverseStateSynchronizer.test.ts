import { describe, expect, test } from "vitest";

import { UniverseStateSynchronizer } from "../UniverseStateSynchronizer.js";


describe(
    "UniverseStateSynchronizer",
    () => {


        test(
            "syncs brain state",
            () => {


                const sync =

                    new UniverseStateSynchronizer();



                const state =

                    sync.synchronize({


                        id:

                            "node-1",


                        status:

                            "healthy"


                    });



                expect(

                    state.objects.get(

                        "node-1"

                    )

                ).toBe(

                    "healthy"

                );


            }
        );


    }
);
