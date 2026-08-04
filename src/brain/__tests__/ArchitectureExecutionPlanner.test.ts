import { describe, expect, it } from "vitest";

import { ArchitectureExecutionPlanner } from "../execution/ArchitectureExecutionPlanner.js";

describe("ArchitectureExecutionPlanner", () => {

    it("creates execution plan", () => {

        const planner = new ArchitectureExecutionPlanner();

        const execution = planner.createExecutionPlan({

            goal: "Split Core",

            steps: []

        });

        expect(execution.goal).toBe("Split Core");

        expect(execution.actions.length).toBeGreaterThan(0);

    });

});
