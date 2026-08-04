import { describe, expect, it } from "vitest";

import { EslintRule } from "../rules/EslintRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("EslintRule", () => {

    it("returns issue when ESLint config is missing", () => {

        const workspace = createWorkspace();

        workspace.eslint.exists = false;

        const issues =
            new EslintRule().analyze({ workspace: workspace  });

        expect(
            issues.some(
                i => i.id === "project.eslint.missing"
            )
        ).toBe(true);

    });

    it("returns no issues when ESLint exists", () => {

        const workspace = createWorkspace();

        const issues =
            new EslintRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(0);

    });


    it("returns issue when TypeScript ESLint is missing", () => {

        const workspace = createWorkspace();

        workspace.eslint.hasTypeScriptSupport = false;
        workspace.framework.typescript = true;

        const issues =
            new EslintRule().analyze({ workspace: workspace  });

        expect(
            issues.some(
                i => i.id === "project.eslint.typescript"
            )
        ).toBe(true);

    });

});
