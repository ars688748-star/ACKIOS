import { describe, expect, it } from "vitest";

import { ArchitectureAnalysisResult } from "../analysis/ArchitectureAnalysisResult.js";

describe("ArchitectureAnalysisResult", () => {

    it("stores unified analysis", () => {

        const result: ArchitectureAnalysisResult = {

            decision: {
                recommendation: "Split Core",
                confidence: 95,
                reasoning: ["High coupling"]
            },

            plan: {
                goal: "Refactor",
                steps: ["Extract module"]
            },

            execution: {
                goal: "Refactor",
                actions: ["Create project"]
            },

            workflow: {
                name: "Architecture Refactoring",
                steps: ["Analyze", "Plan", "Execute"]
            },

            summary: "Architecture improvement plan",

            score: 95

        };

        expect(result.score).toBe(95);

    });

});
