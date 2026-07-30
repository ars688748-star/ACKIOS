import { describe, expect, test } from "vitest";

import { CameraFocusPolicy } from "../CameraFocusPolicy.js";


describe(
    "CameraFocusPolicy",
    () => {


        test(
            "allows critical focus",
            () => {


                const policy =

                    new CameraFocusPolicy();



                const result =

                    policy.shouldFocus({


                        level:

                            "critical",


                        targetId:

                            "planet-1",


                        reason:

                            "failure"


                    });



                expect(

                    result

                ).toBe(true);


            }
        );


    }
);
