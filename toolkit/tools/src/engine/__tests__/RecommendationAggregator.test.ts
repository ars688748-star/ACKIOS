import { describe, expect, it } from "vitest";

import { RecommendationAggregator } from "../RecommendationAggregator.js";
import { Recommendation } from "../Recommendation.js";

describe("RecommendationAggregator", () => {

    it("groups recommendations by category", () => {

        const recommendations: Recommendation[] = [

            {
                id: "1",
                category: "typescript",
                priority: "medium",
                title: "A",
                description: "A"
            },

            {
                id: "2",
                category: "typescript",
                priority: "low",
                title: "B",
                description: "B"
            },

            {
                id: "3",
                category: "documentation",
                priority: "high",
                title: "C",
                description: "C"
            }

        ];

        const groups =
            new RecommendationAggregator()
                .aggregate(recommendations);

        expect(groups).toHaveLength(2);

    });

    it("keeps recommendations inside group", () => {

        const recommendations: Recommendation[] = [

            {
                id: "1",
                category: "package",
                priority: "medium",
                title: "A",
                description: "A"
            },

            {
                id: "2",
                category: "package",
                priority: "medium",
                title: "B",
                description: "B"
            }

        ];

        const groups =
            new RecommendationAggregator()
                .aggregate(recommendations);

        expect(
            groups[0].recommendations
        ).toHaveLength(2);

    });

    it("uses highest priority of group", () => {

        const recommendations: Recommendation[] = [

            {
                id: "1",
                category: "security",
                priority: "low",
                title: "",
                description: ""
            },

            {
                id: "2",
                category: "security",
                priority: "high",
                title: "",
                description: ""
            }

        ];

        const groups =
            new RecommendationAggregator()
                .aggregate(recommendations);

        expect(
            groups[0].priority
        ).toBe("high");

    });

});
