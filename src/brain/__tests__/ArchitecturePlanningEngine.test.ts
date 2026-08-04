import { describe, expect, it } from "vitest";

import { ArchitecturePlanningEngine } from "../planning/ArchitecturePlanningEngine.js";

describe("ArchitecturePlanningEngine", () => {

    it("creates architecture plan", () => {

        const engine = new ArchitecturePlanningEngine();

        const plan = engine.createPlan({

            recommendation: "Split Core",

            confidence: 100,

            reasoning: []

        });

        expect(plan.goal).toBe("Split Core");

        expect(plan.steps.length).toBeGreaterThan(0);

    });

});
