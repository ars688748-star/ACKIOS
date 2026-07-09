import { describe, expect, it } from "vitest";

import { ScoreCalculator } from "../ScoreCalculator.js";
import { AnalysisIssue } from "../AnalysisIssue.js";

describe("ScoreCalculator", () => {

    it("returns 100 for empty issues", () => {

        const result =
            new ScoreCalculator().calculate([]);

        expect(result.total).toBe(100);

        expect(result.categories.project)
            .toBe(100);

    });

    it("subtracts warning penalty", () => {

        const issues: AnalysisIssue[] = [

            {
                id: "test",
                category: "project",
                severity: "warning",
                title: "",
                description: ""
            }

        ];

        const result =
            new ScoreCalculator().calculate(issues);

        expect(result.total).toBe(95);

        expect(result.categories.project)
            .toBe(95);

    });

    it("subtracts error penalty", () => {

        const issues: AnalysisIssue[] = [

            {
                id: "test",
                category: "security",
                severity: "error",
                title: "",
                description: ""
            }

        ];

        const result =
            new ScoreCalculator().calculate(issues);

        expect(result.total).toBe(90);

        expect(result.categories.security)
            .toBe(90);

    });

});
