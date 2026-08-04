import { describe, expect, test } from "vitest";

import { GalaxyLayoutEngine } from "../GalaxyLayoutEngine.js";


describe(
    "GalaxyLayoutEngine gravity layout",
    () => {


        test(
            "pulls connected nodes closer",
            () => {


                const engine =
                    new GalaxyLayoutEngine();



                const scene = {


                    nodes: [

                        {

                            id: "core",

                            name: "core",

                            type: "directory",

                            path: "src/core",

                            position: {
                                x: 0,
                                y: 0
                            }

                        },


                        {

                            id: "memory",

                            name: "memory",

                            type: "file",

                            path: "src/core/memory.ts",

                            position: {
                                x: 0,
                                y: 0
                            }

                        },


                        {

                            id: "plugin",

                            name: "plugin",

                            type: "file",

                            path: "src/plugin.ts",

                            position: {
                                x: 0,
                                y: 0
                            }

                        }

                    ],


                    edges: [

                        {

                            from: "core",

                            to: "memory",

                            type: "dependency"

                        }

                    ],


                    createdAt: new Date()


                };



                const result =
                    engine.layout(
                        scene
                    );



                const core =
                    result.find(
                        node =>
                            node.id === "core"
                    )!;



                const memory =
                    result.find(
                        node =>
                            node.id === "memory"
                    )!;



                const plugin =
                    result.find(
                        node =>
                            node.id === "plugin"
                    )!;



                const connectedDistance =

                    Math.abs(
                        core.position.x -
                        memory.position.x
                    );



                const unrelatedDistance =

                    Math.abs(
                        core.position.x -
                        plugin.position.x
                    );



                expect(
                    connectedDistance
                ).toBeLessThan(
                    unrelatedDistance
                );


            }
        );


    }
);

