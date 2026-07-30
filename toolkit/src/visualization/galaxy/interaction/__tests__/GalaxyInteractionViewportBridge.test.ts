import { describe, expect, test } from "vitest";

import { GalaxyInteractionViewportBridge } from "../GalaxyInteractionViewportBridge.js";

import { GalaxyCameraController } from "../../camera/GalaxyCameraController.js";


describe(
    "GalaxyInteractionViewportBridge",
    () => {


        test(
            "syncs interaction state with viewport",
            () => {


                const bridge =
                    new GalaxyInteractionViewportBridge();



                const camera =
                    new GalaxyCameraController();



                const viewport = {

                    width: 1920,

                    height: 1080,

                    camera: camera.getState(),

                    zoom: 1,

                    active: true

                };



                const state = {

                    zoom: 2,

                    mode: "IDLE"

                };



                const result =
                    bridge.sync(
                        viewport,
                        camera,
                        state
                    );



                expect(
                    result.zoom
                ).toBe(2);



                expect(
                    result.camera
                ).toBeDefined();



                expect(
                    result.active
                ).toBe(true);


            }
        );


    }
);
