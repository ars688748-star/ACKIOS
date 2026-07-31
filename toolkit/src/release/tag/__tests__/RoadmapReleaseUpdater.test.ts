import { describe, expect, test } from "vitest";

import { RoadmapReleaseUpdater } from "../RoadmapReleaseUpdater.js";



describe(

    "RoadmapReleaseUpdater",

    () => {


        test(

            "updates roadmap release state",

            () => {


                const updater =

                    new RoadmapReleaseUpdater();



                const result =

                    updater.update();



                expect(

                    result.version

                ).toBe(

                    "1.0.0"

                );



                expect(

                    result.status

                ).toBe(

                    "completed"

                );


            }

        );


    }

);
