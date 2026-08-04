import { describe, expect, test } from "vitest";

import { GalaxyInteractionController } from "../GalaxyInteractionController.js";
import { GalaxyInteractionCameraBridge } from "../GalaxyInteractionCameraBridge.js";
import { GalaxyCameraController } from "../../camera/GalaxyCameraController.js";


describe(
    "GalaxyInteractionCameraBridge",
    () => {


        test(
            "focuses camera on selected galaxy node",
            () => {


                const interaction =
                    new GalaxyInteractionController();


                const camera =
                    new GalaxyCameraController();


                const bridge =
                    new GalaxyInteractionCameraBridge(
                        interaction,
                        camera
                    );


                const node = {

                    id: "runtime",

                    name: "Runtime",

                    type: "directory" as const,

                    path: "src/runtime",

                    position: {

                        x: 100,

                        y: 50,

                        z: 0

                    }

                };


                bridge.selectAndFocus(
                    node
                );


                const state =
                    camera.getState();



                expect(
                    state.target.x
                ).toBe(100);



                expect(
                    state.target.y
                ).toBe(50);



                expect(
                    interaction.getSelectedNode()
                ).toBe(node);


            }
        );


    }
);
