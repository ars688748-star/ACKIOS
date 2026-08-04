import { describe, expect, test } from "vitest";

import { ReleaseCandidateFactory } from "../ReleaseCandidateFactory.js";



describe(

    "ReleaseCandidateService",

    () => {


        test(

            "creates rc artifact",

            () => {


                const service =

                    ReleaseCandidateFactory.create();



                const artifact =

                    service.create();



                expect(

                    artifact.artifact

                ).toContain(

                    "ACKIOS"

                );


            }

        );


    }

);
