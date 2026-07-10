import { describe,it,expect } from "vitest";

import { BrainBuilder } from "../builders/BrainBuilder.js";

describe("BrainBuilder",()=>{

    it("returns project brain",()=>{

        const builder=new BrainBuilder();

        expect(builder.getBrain()).toBeDefined();

    });

});
