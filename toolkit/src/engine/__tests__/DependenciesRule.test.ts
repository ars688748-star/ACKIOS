import { describe, expect, it } from "vitest";

import { DependenciesRule } from "../rules/DependenciesRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("DependenciesRule", () => {

    it("returns issues when dependencies are missing", () => {

        const workspace = createWorkspace();

        workspace.dependencies.production = [];
        workspace.dependencies.development = [];

        const issues =
            new DependenciesRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(2);

    });

    it("returns no issues when dependencies exist", () => {

        const workspace = createWorkspace();

        workspace.dependencies.production = [
            "react"
        ];

        workspace.dependencies.development = [
            "typescript",
            "vitest",
            "eslint"
        ];

        const issues =
            new DependenciesRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(0);

    });

});

