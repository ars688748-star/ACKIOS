import { describe, expect, it } from "vitest";

import { ArchitectureOrchestrator } from "../orchestrator/ArchitectureOrchestrator.js";

describe("ArchitectureOrchestrator", () => {

    it("orchestrates complete architecture pipeline", () => {

        const orchestrator = new ArchitectureOrchestrator();

        const workflow = orchestrator.orchestrate(
            "Split Core"
        );

        expect(workflow.name).toBe("Split Core");

        expect(workflow.steps.length).toBeGreaterThan(0);

    });

});
