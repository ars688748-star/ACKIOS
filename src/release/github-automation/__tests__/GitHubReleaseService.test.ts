import { describe, expect, test } from "vitest";

import { GitHubReleaseFactory } from "../GitHubReleaseFactory.js";



describe(

    "GitHubReleaseService",

    () => {


        test(

            "prepares github release",

            () => {


                const service =

                    GitHubReleaseFactory.create();



                const release =

                    service.prepare();



                expect(

                    release.config.tag

                ).toBe(

                    "v1.0.0"

                );



                expect(

                    release.assets.length

                ).toBeGreaterThan(0);



                expect(

                    release.publish.status

                ).toBe(

                    "ready"

                );


            }

        );


    }

);
