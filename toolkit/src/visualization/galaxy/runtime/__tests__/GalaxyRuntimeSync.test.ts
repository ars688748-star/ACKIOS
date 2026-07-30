import { describe, expect, test } from "vitest";

import { GalaxySceneRuntime } from "../GalaxySceneRuntime.js";
import { GalaxyRuntimeSync } from "../GalaxyRuntimeSync.js";


describe(
    "GalaxyRuntimeSync",
    () => {


        test(
            "updates scene runtime and renders frame",
            () => {


                const sceneRuntime =
                    new GalaxySceneRuntime();


                const sync =
                    new GalaxyRuntimeSync(
                        sceneRuntime
                    );


                const scene = {

                    nodes: [

                        {

                            id: "brain",

                            name: "Brain",

                            type: "directory" as const,

                            path: "src/brain",

                            position: {

                                x: 0,

                                y: 0,

                                z: 0

                            }

                        }

                    ],

                    edges: [],

                    createdAt: new Date()

                };


                sync.updateScene(
                    scene
                );


                const frame =
                    sync.render();


                expect(
                    frame
                ).toBeDefined();


                expect(
                    frame?.nodes.length
                ).toBe(1);


                expect(
                    frame?.nodes[0].id
                ).toBe("brain");


            }
        );


    }
);
