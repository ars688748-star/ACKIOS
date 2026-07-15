import { describe, expect, it } from "vitest";
import { ArchitectureMetrics } from "../ArchitectureMetrics.js";

describe("ArchitectureMetrics", () => {

    it("calculates coupling metrics", () => {

        const metrics = new ArchitectureMetrics();

        const result = metrics.calculate([
            { from: "A", to: "B", type: "import" },
            { from: "A", to: "C", type: "import" },
            { from: "B", to: "C", type: "import" }
        ]);

        expect(result.totalDependencies).toBe(3);
        expect(result.modules).toBe(3);
        expect(result.averageCoupling).toBe(1);

    });

});
