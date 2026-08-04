import { describe, it, expect } from "vitest";

import { EnvironmentAnalyzer } from "../EnvironmentAnalyzer.js";
import { EnvironmentRecommendation } from "../EnvironmentRecommendation.js";
import { OperatingSystem } from "../../../enums/OperatingSystem.js";


describe("EnvironmentAnalyzer", () => {


    it("recommends full install for powerful machine", () => {


        const analyzer =
            new EnvironmentAnalyzer();


        const result =
            analyzer.analyze({

                platform: {

                    operatingSystem:
                        OperatingSystem.Windows,

                    platform:
                        "win32",

                    version:
                        "11",

                    architecture:
                        "x64",

                    hostname:
                        "test",

                    runtimeVersion:
                        "node"

                },

                hardware: {

                    cpu: {

                        model:
                            "Ryzen",

                        cores:
                            16,

                        threads:
                            16

                    },

                    memory: {

                        totalBytes:
                            32_000_000_000

                    },

                    architecture:
                        "x64",

                    gpu: []

                },

                tools: [],

                capabilities: []

            });


        expect(
            result.recommendation
        )
        .toBe(
            EnvironmentRecommendation.FULL_INSTALL
        );


    });


});
