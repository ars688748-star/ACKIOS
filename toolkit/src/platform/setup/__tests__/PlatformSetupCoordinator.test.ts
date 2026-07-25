import { describe, expect, test } from "vitest";

import { PlatformSetupCoordinator } from "../PlatformSetupCoordinator.js";
import { OperatingSystem } from "../../enums/OperatingSystem.js";


describe("PlatformSetupCoordinator", () => {


    test("creates adaptive setup plan", async () => {


        const coordinator =
            new PlatformSetupCoordinator();


        const plan =
            await coordinator.createPlan({


                platform: {

                    operatingSystem: OperatingSystem.Windows,

                    platform: "win32",

                    version: "11",

                    architecture: "x64",

                    hostname: "test",

                    runtimeVersion: "node"

                },


                hardware: {

                    cpu: {

                        model: "CPU",

                        cores: 8,

                        threads: 8

                    },

                    memory: {

                        totalBytes: 16000000000

                    },

                    architecture: "x64",

                    gpu: []

                },


                tools: [],

                capabilities: []

            });


        expect(plan.strategy)
            .toBe("adaptive");


        expect(plan.components)
            .toContain("runtime");


    });


});
