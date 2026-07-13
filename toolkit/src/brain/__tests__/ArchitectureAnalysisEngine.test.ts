import { describe, expect, it } from "vitest";

import { ArchitectureAnalysisEngine } from "../analysis/engine/ArchitectureAnalysisEngine.js";

describe("ArchitectureAnalysisEngine", () => {

    it("creates unified architecture analysis", () => {

        const engine =
            new ArchitectureAnalysisEngine();

        const result =
            engine.analyze("Split Core");

        expect(result.score)
            .toBe(100);

        expect(result.workflow.name)
            .toBe("Split Core");

    });

});
