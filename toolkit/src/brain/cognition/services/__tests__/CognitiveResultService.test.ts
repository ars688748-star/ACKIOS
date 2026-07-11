import { describe, expect, it } from "vitest";

import { CognitiveResultService } from "../CognitiveResultService.js";

describe("CognitiveResultService", () => {

    it("builds cognitive result through service", () => {

        const service = new CognitiveResultService();

        const context = {

            input: "ACKI",

            state: new Map<string, unknown>([
                ["prediction", { ok: true }],
                ["causeEffect", ["A"]],
                ["impact", { score: 1 }],
                ["plan", ["step"]],
                ["decision", { approved: true }],
                ["execution", { executed: true }],
                ["reflection", { success: true }],
                ["selfEvaluation", { score: 1 }],
                ["goals", ["goal"]]
            ]),

            metadata: new Map<string, unknown>()

        };

        const result = service.build(context);

        expect(result.prediction).toBeDefined();
        expect(result.causeEffect).toBeDefined();
        expect(result.impact).toBeDefined();
        expect(result.plan).toBeDefined();
        expect(result.decision).toBeDefined();
        expect(result.execution).toBeDefined();
        expect(result.reflection).toBeDefined();
        expect(result.selfEvaluation).toBeDefined();
        expect(result.goals).toBeDefined();

    });

});
