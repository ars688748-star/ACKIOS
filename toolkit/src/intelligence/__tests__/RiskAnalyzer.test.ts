import { describe, expect, it } from "vitest";

import {
    ArchitectureType,
    RiskAnalyzer
} from "../index.js";

describe("RiskAnalyzer", () => {

    it("should detect risks", () => {

        const analyzer = new RiskAnalyzer();

        const report = analyzer.analyze({

            architecture: ArchitectureType.Layered,

            layers: [],

            hasTests: false,

            hasLint: false,

            hasFormatter: false,

            score: 20,

            recommendations: []

        });

        expect(report.risks.length).toBeGreaterThan(0);

        expect(report.score).toBeLessThan(100);

    });

});
