import { describe, expect, test } from "vitest";

import { SetupInstallationMapper } from "../services/SetupInstallationMapper.js";


describe("SetupInstallationMapper", () => {


    test("creates installation context from setup plan", () => {


        const mapper =
            new SetupInstallationMapper();


        const context =
            mapper.map({

                operatingSystem: "windows",

                strategy: "optimized",

                components: [
                    "workspace",
                    "brain"
                ],

                warnings: []

            });


        expect(context.platform)
            .toBe("windows");


        expect(context.strategy)
            .toBe("optimized");


        expect(context.components)
            .toContain("brain");


        expect(context.status)
            .toBe("pending");


    });


});
