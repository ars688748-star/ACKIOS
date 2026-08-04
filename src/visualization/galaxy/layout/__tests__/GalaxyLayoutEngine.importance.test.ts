import { describe, expect, test } from "vitest";

import { GalaxyImportanceCalculator } from "../GalaxyImportanceCalculator.js";


describe(
    "GalaxyImportanceCalculator",
    () => {


        test(
            "calculates higher importance for connected nodes",
            () => {


                const calculator =
                    new GalaxyImportanceCalculator();



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

                            id: "helper",

                            name: "helper",

                            type: "file",

                            path: "src/helper.ts",

                            position: {
                                x: 0,
                                y: 0
                            }

                        }

                    ],


                    edges: [

                        {

                            from: "core",

                            to: "helper",

                            type: "dependency"

                        }

                    ],


                    createdAt: new Date()

                };



                const coreScore =
                    calculator.calculate(
                        "core",
                        scene
                    );



                const helperScore =
                    calculator.calculate(
                        "helper",
                        scene
                    );



                expect(
                    coreScore
                ).toBeGreaterThan(
                    helperScore
                );


            }
        );


    }
);
