import { describe, expect, it } from "vitest";

import { ArchitectureDecisionEngine } from "../decision/ArchitectureDecisionEngine.js";

describe("ArchitectureDecisionEngine", () => {

    it("creates architecture decision", () => {

        const engine = new ArchitectureDecisionEngine();

        const decision = engine.decide("Split module");

        expect(decision.recommendation).toBe("Split module");

        expect(decision.reasoning.length).toBeGreaterThan(0);

    });

});
