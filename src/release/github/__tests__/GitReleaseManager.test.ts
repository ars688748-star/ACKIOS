import { describe, expect, test } from "vitest";

import { GitReleaseManager } from "../GitReleaseManager.js";



describe(

    "GitReleaseManager",

    () => {


        test(

            "creates release tag",

            () => {


                const manager =

                    new GitReleaseManager();



                const tag =

                    manager.prepareTag();



                expect(

                    tag.tag

                ).toBe(

                    "v1.0.0"

                );


            }

        );


    }

);
