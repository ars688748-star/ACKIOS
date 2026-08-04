import { describe, expect, it } from "vitest";

import { ReasoningEngine } from "../reasoning/ReasoningEngine.js";

describe("ReasoningEngine", () => {

    it("creates explainable reasoning", () => {

        const engine = new ReasoningEngine();

        const result = engine.explain("Architecture is valid");

        expect(result.conclusion).toBe("Architecture is valid");

        expect(result.steps.length).toBe(1);

        expect(result.confidence).toBe(100);

    });

});
