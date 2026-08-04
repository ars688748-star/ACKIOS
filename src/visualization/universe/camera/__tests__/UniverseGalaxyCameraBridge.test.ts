import { describe, expect, test } from "vitest";

import { GalaxyCameraController } from "../../../galaxy/camera/GalaxyCameraController.js";
import { GalaxyCameraTransition } from "../../../galaxy/camera/GalaxyCameraTransition.js";

import { UniverseGalaxyCameraBridge } from "../UniverseGalaxyCameraBridge.js";


describe(
    "UniverseGalaxyCameraBridge",
    () => {


        test(
            "starts camera transition from universe focus request",
            () => {


                const camera =
                    new GalaxyCameraController();



                const transition =
                    new GalaxyCameraTransition();



                const bridge =
                    new UniverseGalaxyCameraBridge(
                        camera,
                        transition
                    );



                bridge.focus({

                    targetId: "memory-engine",

                    priority: "critical",

                    reason: "architecture failure detected",

                    createdAt: new Date()

                });



                expect(

                    transition.isActive()

                ).toBe(true);


            }
        );


    }
);
