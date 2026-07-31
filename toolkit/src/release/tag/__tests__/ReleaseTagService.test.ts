import { describe, expect, test } from "vitest";

import { ReleaseTagFactory } from "../ReleaseTagFactory.js";



describe(

    "ReleaseTagService",

    () => {


        test(

            "creates release tag",

            () => {


                const service =

                    ReleaseTagFactory.create();



                const release =

                    service.create();



                expect(

                    release.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    release.tag

                ).toBe(

                    "v1.0.0"

                );



                expect(

                    release.status

                ).toBe(

                    "released"

                );


            }

        );


    }

);
