import { describe, expect, it } from "vitest";

import { RepositoryRule } from "../rules/RepositoryRule.js";

describe("RepositoryRule", () => {

    it("creates instance", () => {

        expect(new RepositoryRule()).toBeDefined();

    });

});
