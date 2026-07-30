import { describe, expect, test } from "vitest";

import { CameraIntelligence } from "../CameraIntelligence.js";


describe(
    "CameraIntelligence",
    () => {


        test(
            "detects critical planet alert",
            () => {


                const intelligence =

                    new CameraIntelligence();



                const decision =

                    intelligence.analyze({


                        id:

                            "event-1",


                        type:

                            "planet-alert",


                        targetId:

                            "planet-1",


                        message:

                            "Critical failure",


                        createdAt:

                            new Date()


                    });



                expect(

                    decision.level

                ).toBe(

                    "critical"

                );



                expect(

                    decision.targetId

                ).toBe(

                    "planet-1"

                );


            }
        );


    }
);
