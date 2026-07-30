import { describe, expect, test } from "vitest";

import { UniverseOrbitRuntime } from "../UniverseOrbitRuntime.js";


describe(
    "UniverseOrbitRuntime",
    () => {


        test(
            "updates object orbital position",
            () => {


                const runtime =
                    new UniverseOrbitRuntime();



                const object = {


                    id:
                        "planet-1",


                    name:
                        "Brain Planet",


                    type:
                        "planet" as const,


                    importance:
                        10,


                    orbit:
                    {

                        radius:
                            20,


                        angle:
                            0

                    },


                    position:
                    {

                        x:
                            0,


                        y:
                            0,


                        z:
                            0

                    },


                    health:
                        "stable" as const


                };



                const position =

                    runtime.update(

                        object,

                        0.1

                    );



                expect(

                    position.x

                ).toBeDefined();



                expect(

                    position.y

                ).toBeDefined();


            }
        );


    }
);
