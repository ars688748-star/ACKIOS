import { describe, expect, it } from "vitest";

import { ReadmeRule } from "../rules/ReadmeRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("ReadmeRule", () => {

    it("returns issue when README is missing", () => {

        const workspace = createWorkspace();

        workspace.readme.exists = false;

        const issues =
            new ReadmeRule().analyze({ workspace: workspace  });

        expect(
            issues.some(
                i => i.id === "project.readme.file"
            )
        ).toBe(true);

    });

    it("returns no issues when README exists", () => {

        const workspace = createWorkspace();

        workspace.readme.exists = true;

        const issues =
            new ReadmeRule().analyze({ workspace: workspace  });

        expect(
            issues.some(
                i => i.id === "project.readme.file"
            )
        ).toBe(false);

    });

});

