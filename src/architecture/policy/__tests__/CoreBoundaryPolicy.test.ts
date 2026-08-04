import { describe, expect, it } from "vitest";

import { CoreBoundaryPolicy } from "../CoreBoundaryPolicy.js";

describe("CoreBoundaryPolicy", () => {

    it("contains public API paths", () => {

        expect(CoreBoundaryPolicy.allowed).toContain("brain/api");
        expect(CoreBoundaryPolicy.allowed).toContain("brain/contracts");

    });

    it("contains private runtime paths", () => {

        expect(CoreBoundaryPolicy.forbidden).toContain("brain/runtime");
        expect(CoreBoundaryPolicy.forbidden).toContain("brain/kernel");

    });

});
