import { describe, expect, it } from "vitest";

import { {{RuleName}} } from "../rules/{{RuleName}}.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("{{RuleName}}", () => {

    it("returns no issues for default workspace", () => {

        const workspace = createWorkspace();

        const issues =
            new {{RuleName}}().analyze(workspace);

        expect(Array.isArray(issues)).toBe(true);

    });

});
