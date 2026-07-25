import { describe, expect, test, vi } from "vitest";

import { PlatformSetupCoordinator } from "../services/PlatformSetupCoordinator.js";
import { EnvironmentRecommendation } from "../../environment/intelligence/EnvironmentRecommendation.js";


describe("PlatformSetupCoordinator", () => {


    test("creates setup plan from environment profile", async () => {


        const analyzer = {

            analyze: vi.fn()
                .mockReturnValue({

                    score: {
                        value: 100
                    },

                    recommendation:
                        EnvironmentRecommendation.FULL_INSTALL

                })

        };


        const coordinator =
            new PlatformSetupCoordinator(
                analyzer as any
            );


        const plan =
            await coordinator.createPlan({

                platform: {

                    operatingSystem: "windows"

                } as any,

                hardware: {} as any,

                tools: [],

                capabilities: []

            });


        expect(plan.strategy)
            .toBe(EnvironmentRecommendation.FULL_INSTALL);


        expect(plan.components)
            .toContain("brain");


    });


});
