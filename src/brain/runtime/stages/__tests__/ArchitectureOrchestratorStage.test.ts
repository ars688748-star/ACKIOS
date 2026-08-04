import { describe, expect, it } from "vitest";

import { ArchitectureOrchestratorStage } from "../ArchitectureOrchestratorStage.js";

describe("ArchitectureOrchestratorStage", () => {

    it("creates workflow when input exists", async () => {

        const stage = new ArchitectureOrchestratorStage();

        const result = await stage.execute({

            input: "Split Core"

        } as never);

        expect(result.workflow).toBeDefined();

    });

});
