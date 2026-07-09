import { describe, expect, it } from "vitest";

import { GitignoreRule } from "../rules/GitignoreRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("GitignoreRule", () => {

    it("returns issue when .gitignore is missing", () => {

        const workspace = createWorkspace();

        workspace.structure.hasGitignore = false;

        const issues =
            new GitignoreRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(1);

        expect(issues[0].id)
            .toBe("repository.gitignore");

    });

    it("returns no issues when .gitignore exists", () => {

        const workspace = createWorkspace();

        workspace.structure.hasGitignore = true;

        const issues =
            new GitignoreRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(0);

    });

});

