import { describe, expect, it } from "vitest";

import { ArchitectureSimulationEngine } from "../simulation/ArchitectureSimulationEngine.js";

describe("ArchitectureSimulationEngine", () => {

    it("simulates architecture changes", () => {

        const engine = new ArchitectureSimulationEngine();

        const result = engine.simulate(["brain.graph"]);

        expect(result.success).toBe(true);

        expect(result.affectedComponents).toContain("brain.graph");

    });

});
