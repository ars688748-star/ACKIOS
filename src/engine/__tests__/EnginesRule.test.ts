import { describe, expect, it } from "vitest";

import { EnginesRule } from "../rules/EnginesRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("EnginesRule", () => {

    it("returns issue when engines.node is missing", () => {

        const workspace = createWorkspace();

        const issues =
            new EnginesRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(1);

        expect(issues[0].id)
            .toBe("package.engines.node.missing");

    });

    it("returns no issues when engines.node exists", () => {

        const workspace = createWorkspace();

        workspace.package.engines.node = ">=22";

        const issues =
            new EnginesRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(0);

    });

});

