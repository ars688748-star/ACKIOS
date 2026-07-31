import { describe, expect, test } from "vitest";

import { PackagingFactory } from "../PackagingFactory.js";



describe(

    "PackagingService",

    () => {


        test(

            "creates release package",

            () => {


                const service =

                    PackagingFactory.create();



                const artifact =

                    service.create(

                        "linux"

                    );



                expect(

                    artifact.target

                ).toBe(

                    "linux"

                );


            }

        );


    }

);
