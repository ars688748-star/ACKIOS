import { describe, expect, it } from "vitest";

import { PackageManagerRule } from "../rules/PackageManagerRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("PackageManagerRule", () => {

    it("returns issue when packageManager is missing", () => {

        const workspace = createWorkspace();

        const issues =
            new PackageManagerRule().analyze(workspace);

        expect(issues).toHaveLength(1);

        expect(issues[0].id)
            .toBe("package.packageManager.missing");

    });

    it("returns no issues when packageManager exists", () => {

        const workspace = createWorkspace();

        workspace.package.packageManager = "npm@11";

        const issues =
            new PackageManagerRule().analyze(workspace);

        expect(issues).toHaveLength(0);

    });

});
