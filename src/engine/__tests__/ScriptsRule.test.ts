import { describe, expect, it } from "vitest";

import { ScriptsRule } from "../rules/ScriptsRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("ScriptsRule", () => {

    it("returns issues when scripts are missing", () => {

        const workspace = createWorkspace();

        workspace.package.scripts = {};

        const issues =
            new ScriptsRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(5);

    });

    it("returns no issues when required scripts exist", () => {

        const workspace = createWorkspace();

        workspace.package.scripts = {

            build: "tsc",

            test: "vitest",

            lint: "eslint .",

            format: "prettier -w .",

            dev: "vite"

        };

        const issues =
            new ScriptsRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(0);

    });

});

