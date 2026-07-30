import { describe, expect, test } from "vitest";

import { UniverseCameraController } from "../UniverseCameraController.js";


describe(
    "UniverseCameraController",
    () => {


        test(
            "stores camera focus request",
            () => {


                const controller =
                    new UniverseCameraController();



                const request = {

                    targetId: "memory-engine",

                    priority: "critical",

                    reason: "architecture failure detected",

                    createdAt: new Date()

                };



                controller.focus(
                    request
                );



                const result =
                    controller.getCurrentFocus();



                expect(
                    result
                ).toBeDefined();



                expect(
                    result?.targetId
                ).toBe(
                    "memory-engine"
                );



                expect(
                    result?.priority
                ).toBe(
                    "critical"
                );


            }
        );



        test(
            "clears current focus",
            () => {


                const controller =
                    new UniverseCameraController();



                controller.focus({

                    targetId: "planet-1",

                    priority: "warning",

                    reason: "health warning",

                    createdAt: new Date()

                });



                controller.clear();



                expect(
                    controller.getCurrentFocus()
                ).toBeUndefined();


            }
        );


    }
);
