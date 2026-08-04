import { describe, expect, it } from "vitest";

import { ArchitecturePipeline } from "../ArchitecturePipeline.js";
import type { ArchitectureContext } from "../../model/ArchitectureContext.js";

describe("ArchitecturePipeline", () => {

    it("executes full architecture pipeline", async () => {

        const pipeline = new ArchitecturePipeline();

        const context: ArchitectureContext = {
            model: {
                nodes: [],
                edges: [
                    { from: "A", to: "B", type: "import" },
                    { from: "B", to: "C", type: "import" },
                    { from: "C", to: "A", type: "import" }
                ]
            }
        };

        const result = await pipeline.run(context);

        expect(result.metrics?.totalDependencies).toBe(3);
        expect(result.dependencies?.cycles.length).toBe(1);

    });

});
