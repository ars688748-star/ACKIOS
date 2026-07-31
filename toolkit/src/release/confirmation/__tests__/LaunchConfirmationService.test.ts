import { describe, expect, test } from "vitest";

import { LaunchConfirmationFactory } from "../LaunchConfirmationFactory.js";



describe(

    "LaunchConfirmationService",

    () => {


        test(

            "confirms ACKIOS public launch",

            () => {


                const service =

                    LaunchConfirmationFactory.create();



                const result =

                    service.confirm();



                expect(

                    result.approval.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.ready

                ).toBe(true);



                expect(

                    result.publication.target

                ).toBe(

                    "GitHub Release"

                );


            }

        );


    }

);
