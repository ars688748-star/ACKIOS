import { describe, expect, it } from "vitest";

import { ArchitectureRuleEngine } from "../ArchitectureRuleEngine.js";
import { CoreBoundaryRule } from "../rules/CoreBoundaryRule.js";
import { ContractsBoundaryRule } from "../rules/ContractsBoundaryRule.js";

describe("ArchitectureRuleEngine", () => {

    it("runs all architecture rules", async () => {

        const engine = new ArchitectureRuleEngine([
            new CoreBoundaryRule(),
            new ContractsBoundaryRule()
        ]);

        const violations = await engine.validate({

            nodes: [
                {
                    name: "BrainRuntime.ts",
                    path: "/src/contracts/api/BrainRuntime.ts",
                    type: "file"
                }
            ],

            edges: [
                {
                    from: "/src/app.ts",
                    to: "../brain/runtime/BrainRuntime",
                    type: "import"
                }
            ]

        });

        expect(violations).toHaveLength(2);

    });

});
