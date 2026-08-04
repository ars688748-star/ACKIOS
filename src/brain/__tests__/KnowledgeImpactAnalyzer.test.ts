import { describe, expect, it } from "vitest";

import {
    KnowledgeImpactAnalyzer,
    KnowledgeRelation,
    KnowledgeRelationType
} from "../knowledge/index.js";

describe("KnowledgeImpactAnalyzer", () => {

    it("returns impacted nodes", () => {

        const analyzer = new KnowledgeImpactAnalyzer();

        const relations = [

            new KnowledgeRelation("1","Core","Engine",KnowledgeRelationType.DependsOn),
            new KnowledgeRelation("2","Core","CLI",KnowledgeRelationType.DependsOn),
            new KnowledgeRelation("3","CLI","UI",KnowledgeRelationType.DependsOn)

        ];

        expect(analyzer.getImpactedNodes("Core", relations))
            .toEqual(["Engine","CLI"]);

    });

});
