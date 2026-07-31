import { describe, expect, test } from "vitest";

import { GitReleaseFactory } from "../GitReleaseFactory.js";



describe(

    "GitReleaseService",

    () => {


        test(

            "prepares github release",

            () => {


                const service =

                    GitReleaseFactory.create();



                const release =

                    service.prepare();



                expect(

                    release.tag.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    release.checklist.completed

                ).toBe(true);


            }

        );


    }

);
