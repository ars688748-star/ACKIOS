import { describe, expect, test } from "vitest";

import { ReleaseWorkflow } from "../ReleaseWorkflow.js";



describe(

    "ReleaseWorkflow",

    () => {


        test(

            "creates release pipeline",

            () => {


                const workflow =

                    new ReleaseWorkflow();



                const steps =

                    workflow.execute();



                expect(

                    steps

                ).toContain(

                    "publish"

                );


            }

        );


    }

);
