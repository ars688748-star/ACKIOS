import { describe, expect, test } from "vitest";

import { GalaxySceneRuntime } from "../GalaxySceneRuntime.js";


describe(
    "GalaxySceneRuntime",
    () => {


        test(
            "loads scene and produces render frame",
            () => {


                const runtime =
                    new GalaxySceneRuntime();



                const scene = {

                    nodes: [

                        {

                            id: "runtime",

                            name: "Runtime",

                            type: "directory" as const,

                            path: "src/runtime",

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



                runtime.load(
                    scene
                );



                const frame =
                    runtime.render();



                expect(
                    frame
                ).toBeDefined();



                expect(
                    frame?.nodes.length
                ).toBe(1);



                expect(
                    frame?.edges.length
                ).toBe(0);


            }
        );


    }
);
