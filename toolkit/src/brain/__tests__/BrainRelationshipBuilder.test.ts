import { describe,it,expect } from "vitest";

import { BrainBuilder } from "../builders/index.js";
import { BrainRelationshipBuilder } from "../relationships/index.js";
import { BrainRelationType } from "../models/index.js";

describe("BrainRelationshipBuilder",()=>{

    it("creates relationship",()=>{

        const builder=new BrainBuilder();

        new BrainRelationshipBuilder(builder)
            .relate("A","B",BrainRelationType.DependsOn);

        expect(builder.build()).toBeDefined();

    });

});
