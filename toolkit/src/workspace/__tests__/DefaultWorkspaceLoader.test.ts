import { describe, expect, it } from "vitest";

import { DefaultWorkspaceLoader } from "../loader/DefaultWorkspaceLoader.js";

describe("DefaultWorkspaceLoader", () => {

    it("creates loader", () => {

        expect(
            new DefaultWorkspaceLoader()
        ).toBeDefined();

    });

});
