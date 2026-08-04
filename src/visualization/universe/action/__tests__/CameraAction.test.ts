import { describe, expect, test } from "vitest";

import { CameraAction } from "../CameraAction.js";


describe(
    "CameraAction",
    () => {


        test(
            "creates camera action",
            () => {


                const action =

                    new CameraAction();



                const result =

                    action.create(

                        "planet-1"

                    );



                expect(

                    result.type

                ).toBe(

                    "camera-focus"

                );


            }
        );


    }
);
