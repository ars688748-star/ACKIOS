import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime Interaction",
    () => {


        test(
            "selects node through runtime facade",
            () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                galaxy.createViewport(
                    1920,
                    1080
                );



                const node = {

                    id: "brain",

                    position: {

                        x: 10,

                        y: 20,

                        z: 30

                    }

                } as any;



                galaxy.selectNode(
                    node
                );



                const state =
                    galaxy.interaction.getState();



                expect(
                    state.selectedNodeId
                ).toBe(
                    "brain"
                );



                expect(
                    galaxy.camera.getState().target.x
                ).toBe(
                    10
                );


            }
        );


    }
);
