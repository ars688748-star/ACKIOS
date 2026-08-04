import { describe, expect, it } from "vitest";

import { HomepageRule } from "../rules/HomepageRule.js";

describe("HomepageRule", () => {

    it("creates instance", () => {

        expect(new HomepageRule()).toBeDefined();

    });

});

