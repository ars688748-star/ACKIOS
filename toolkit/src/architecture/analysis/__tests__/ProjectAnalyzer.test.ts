import { describe, expect, it } from "vitest";
import { ProjectAnalyzer } from "../ProjectAnalyzer.js";

describe("ProjectAnalyzer", () => {

    it("analyzes project architecture", () => {

        const analyzer = new ProjectAnalyzer();

        const result = analyzer.analyze([
            { from: "A", to: "B", type: "import" },
            { from: "A", to: "C", type: "import" },
            { from: "C", to: "A", type: "import" }
        ]);

        expect(result.metrics.totalDependencies).toBe(3);

        expect(result.dependencies.cycles.length).toBe(1);

    });

});
