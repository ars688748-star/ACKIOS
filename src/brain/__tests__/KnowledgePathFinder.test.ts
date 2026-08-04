import { describe, expect, it } from "vitest";

import {
    KnowledgePathFinder,
    KnowledgeRelation,
    KnowledgeRelationType
} from "../knowledge/index.js";

describe("KnowledgePathFinder", () => {

    it("finds dependency path", () => {

        const finder = new KnowledgePathFinder();

        const relations = [

            new KnowledgeRelation("1","A","B",KnowledgeRelationType.DependsOn),
            new KnowledgeRelation("2","B","C",KnowledgeRelationType.DependsOn),
            new KnowledgeRelation("3","C","D",KnowledgeRelationType.DependsOn)

        ];

        expect(
            finder.findPath("A","D",relations)
        ).toEqual(["A","B","C","D"]);

    });

});
