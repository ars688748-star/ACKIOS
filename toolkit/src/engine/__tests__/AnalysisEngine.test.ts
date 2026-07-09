import { describe, expect, it } from "vitest";

import { AnalysisEngine } from "../AnalysisEngine.js";

describe("AnalysisEngine", () => {

    it("creates engine instance", () => {

        const engine = new AnalysisEngine();

        expect(engine).toBeDefined();

    });

});

