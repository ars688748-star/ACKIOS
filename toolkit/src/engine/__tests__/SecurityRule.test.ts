import { describe, expect, it } from "vitest";

import { SecurityRule } from "../rules/SecurityRule.js";

describe("SecurityRule", () => {

    it("creates instance", () => {

        expect(new SecurityRule()).toBeDefined();

    });

});

