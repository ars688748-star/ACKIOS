import { describe, expect, test } from "vitest";

import { GalaxyLayoutEngine } from "../GalaxyLayoutEngine.js";


describe(
    "GalaxyLayoutEngine cluster layout",
    () => {


        test(
            "groups directories before files",
            () => {


                const engine =
                    new GalaxyLayoutEngine();



                const scene = {

                    nodes: [

                        {

                            id: "brain",

                            name: "brain",

                            type: "directory",

                            path: "src/brain",

                            position: {
                                x: 0,
                                y: 0
                            }

                        },

                        {

                            id: "file",

                            name: "index.ts",

                            type: "file",

                            path: "src/index.ts",

                            position: {
                                x: 0,
                                y: 0
                            }

                        }

                    ],

                    edges: [],

                    createdAt: new Date()

                };



                const result =
                    engine.layout(
                        scene
                    );



                expect(
                    result.length
                ).toBe(
                    2
                );



                expect(
                    result[0].position.x
                ).toBe(
                    0
                );



                expect(
                    result[1].position.x
                ).toBeGreaterThan(
                    0
                );


            }
        );


    }
);
