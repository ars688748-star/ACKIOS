import { describe, expect, test } from "vitest";

import { PublicationFactory } from "../PublicationFactory.js";



describe(

    "PublicationService",

    () => {


        test(

            "prepares github publication",

            () => {


                const service =

                    PublicationFactory.create();



                const result =

                    service.prepare();



                expect(

                    result.tag.tag

                ).toBe(

                    "v1.0.0"

                );



                expect(

                    result.publish.platform

                ).toBe(

                    "github"

                );



                expect(

                    result.workflow.length

                ).toBeGreaterThan(0);


            }

        );


    }

);
