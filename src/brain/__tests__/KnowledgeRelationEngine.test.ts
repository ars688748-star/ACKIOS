import { describe, expect, it } from "vitest";

import {
    KnowledgeRelation,
    KnowledgeRelationEngine,
    KnowledgeRelationType
} from "../knowledge/index.js";

describe("KnowledgeRelationEngine", () => {

    it("finds incoming and outgoing relations", () => {

        const engine = new KnowledgeRelationEngine();

        const relations = [

            new KnowledgeRelation("1","A","B",KnowledgeRelationType.DependsOn),

            new KnowledgeRelation("2","C","A",KnowledgeRelationType.References)

        ];

        expect(engine.findOutgoing("A",relations)).toHaveLength(1);

        expect(engine.findIncoming("A",relations)).toHaveLength(1);

    });

});
