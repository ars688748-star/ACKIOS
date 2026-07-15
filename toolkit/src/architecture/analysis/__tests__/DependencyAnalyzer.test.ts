import { describe, expect, it } from "vitest";
import { DependencyAnalyzer } from "../DependencyAnalyzer.js";

describe("DependencyAnalyzer", () => {

    it("detects cyclic dependencies", () => {

        const analyzer = new DependencyAnalyzer();

        const result = analyzer.analyze([
            { from: "A", to: "B", type: "import" },
            { from: "B", to: "C", type: "import" },
            { from: "C", to: "A", type: "import" }
        ]);

        expect(result.cycles).toContainEqual([
            "A",
            "B",
            "C",
            "A"
        ]);

    });

});
