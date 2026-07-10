import { describe, expect, it } from "vitest";

import {
    ArchitectureType,
    RecommendationEngine
} from "../index.js";

describe("RecommendationEngine", () => {

    it("should generate recommendations", () => {

        const engine = new RecommendationEngine();

        const report = engine.generate({

            summary: {

                overallScore: 50,

                technologies: 1,

                dependencies: 2,

                risks: 2,

                architecture: "Layered"

            },

            technologies: [],

            architecture: {

                architecture: ArchitectureType.Layered,

                layers: [],

                hasTests: false,

                hasLint: false,

                hasFormatter: false,

                score: 30,

                recommendations: []

            },

            dependencies: {

                dependencies: [],

                total: 0

            },

            risks: {

                score: 40,

                risks: []

            }

        });

        expect(report.recommendations.length).toBeGreaterThan(0);

    });

});
