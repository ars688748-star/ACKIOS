import { describe, expect, it } from "vitest";

import { TsConfigRule } from "../rules/TsConfigRule.js";
import { createWorkspace } from "./helpers/WorkspaceBuilder.js";

describe("TsConfigRule", () => {

    it("returns issues when strict options are disabled", () => {

        const workspace = createWorkspace();

        workspace.typescript = {

            exists: true,

            strict: false,

            noImplicitAny: false,

            noUnusedLocals: false,

            noUnusedParameters: false,

            forceConsistentCasingInFileNames: false,

            skipLibCheck: true,

            noUncheckedIndexedAccess: true,

            exactOptionalPropertyTypes: true,

            isolatedModules: true,

            verbatimModuleSyntax: true,

            useDefineForClassFields: true,

            target: "ES2022",

            module: "NodeNext",

            moduleResolution: "NodeNext",

            rootDir: "src",

            outDir: "dist"

        };

        const issues =
            new TsConfigRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(4);

    });

    it("returns no issues when recommended options are enabled", () => {

        const workspace = createWorkspace();

        workspace.typescript = {

            exists: true,

            strict: true,

            noImplicitAny: true,

            noUnusedLocals: true,

            noUnusedParameters: true,

            forceConsistentCasingInFileNames: true,

            skipLibCheck: true,

            noUncheckedIndexedAccess: true,

            exactOptionalPropertyTypes: true,

            isolatedModules: true,

            verbatimModuleSyntax: true,

            useDefineForClassFields: true,

            target: "ES2022",

            module: "NodeNext",

            moduleResolution: "NodeNext",

            rootDir: "src",

            outDir: "dist"

        };

        const issues =
            new TsConfigRule().analyze({ workspace: workspace  });

        expect(issues).toHaveLength(0);

    });

});

