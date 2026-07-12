import { describe, expect, it } from "vitest";

import { CoreBoundaryRule } from "../CoreBoundaryRule.js";

describe("CoreBoundaryRule", () => {

    it("detects direct runtime dependency", async () => {

        const rule = new CoreBoundaryRule();

        const violations = await rule.validate({

            nodes: [],

            edges: [
                {
                    from: "/toolkit/src/app.ts",
                    to: "../brain/runtime/BrainRuntime",
                    type: "import"
                }
            ]

        });

        expect(violations).toHaveLength(1);

        expect(violations[0].rule).toBe("CoreBoundaryRule");

    });

});
