import { describe, expect, test } from "vitest";

import { GalaxyVisualizationRuntime } from "../GalaxyVisualizationRuntime.js";


describe(
    "GalaxyVisualizationRuntime architecture",
    () => {


        test(
            "loads architecture into galaxy scene",
            async () => {


                const galaxy =
                    new GalaxyVisualizationRuntime();



                galaxy.architectureBridge.getGalaxyArchitectureGraph =
                    async () => ({

                        nodes: [

                            {

                                name: "Brain",

                                path: "src/brain",

                                type: "directory"

                            }

                        ],

                        edges: []

                    } as any);



                await galaxy.loadArchitecture(
                    "mock"
                );



                const visualScene =
                    galaxy.sceneRuntime.render();



                expect(
                    visualScene
                ).toBeDefined();



                expect(
                    visualScene?.nodes.length
                ).toBe(
                    1
                );


            }
        );


    }
);
