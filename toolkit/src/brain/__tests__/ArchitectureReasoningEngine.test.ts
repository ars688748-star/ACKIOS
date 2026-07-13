import { describe, expect, it } from "vitest";

import { ArchitectureReasoningEngine } from "../analysis/engine/ArchitectureReasoningEngine.js";

describe("ArchitectureReasoningEngine", () => {

    it("creates unified architecture analysis", () => {

        const engine =
            new ArchitectureReasoningEngine();

        const result =
            engine.analyze("Split Core");

        expect(result.score)
            .toBe(100);

        expect(result.workflow.name)
            .toBe("Split Core");

    });

});
