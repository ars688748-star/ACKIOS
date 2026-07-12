import { describe, expect, it } from "vitest";

import { ContractsBoundaryRule } from "../ContractsBoundaryRule.js";

describe("ContractsBoundaryRule", () => {

    it("returns no violations for empty graph", async () => {

        const rule = new ContractsBoundaryRule();

        const violations = await rule.validate({
            nodes: [],
            edges: []
        });

        expect(violations).toEqual([]);

    });

    it("detects non-interface contract", async () => {

        const rule = new ContractsBoundaryRule();

        const violations = await rule.validate({

            nodes: [
                {
                    name: "BrainRuntime.ts",
                    path: "/src/contracts/api/BrainRuntime.ts",
                    type: "file"
                }
            ],

            edges: []

        });

        expect(violations).toHaveLength(1);
        expect(violations[0].rule).toBe("ContractsBoundaryRule");

    });

});
