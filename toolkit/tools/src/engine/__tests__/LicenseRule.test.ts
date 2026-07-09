import { describe, expect, it } from "vitest";

import { LicenseRule } from "../rules/LicenseRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("LicenseRule", () => {

    it("returns issue when LICENSE file is missing", () => {

        const workspace = createWorkspace();

        workspace.structure.hasLicense = false;

        const issues =
            new LicenseRule().analyze(workspace);

        expect(
            issues.some(i => i.id === "project.license.file")
        ).toBe(true);

    });

    it("returns issue when package license is missing", () => {

        const workspace = createWorkspace();

        workspace.package.license = "";

        const issues =
            new LicenseRule().analyze(workspace);

        expect(
            issues.some(i => i.id === "package.license")
        ).toBe(true);

    });

    it("returns no issues for valid license", () => {

        const workspace = createWorkspace();

        workspace.package.license = "MIT";
        workspace.structure.hasLicense = true;

        const issues =
            new LicenseRule().analyze(workspace);

        expect(issues).toHaveLength(0);

    });

});
