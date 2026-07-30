import { describe, expect, test } from "vitest";

import { GalaxyInteractionController } from "../GalaxyInteractionController.js";

import { GalaxyCameraController } from "../../camera/GalaxyCameraController.js";


describe(
    "GalaxyInteractionController",
    () => {


        test(
            "selects node and focuses camera",
            () => {


                const camera =
                    new GalaxyCameraController();



                const controller =
                    new GalaxyInteractionController(
                        camera
                    );



                const node = {

                    id: "brain",

                    position: {

                        x: 10,

                        y: 20,

                        z: 30

                    }

                } as any;



                controller.selectNode(
                    node
                );



                const state =
                    controller.getState();



                expect(
                    state.selectedNodeId
                ).toBe(
                    "brain"
                );



                expect(
                    state.focusedNodeId
                ).toBe(
                    "brain"
                );



                expect(
                    camera.getState().target.x
                ).toBe(
                    10
                );


            }
        );



    }
);
