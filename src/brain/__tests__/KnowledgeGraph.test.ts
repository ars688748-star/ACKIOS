import { describe, expect, it } from "vitest";

import {
    KnowledgeGraph,
    KnowledgeNode,
    KnowledgeRelation,
    KnowledgeRelationType
} from "../knowledge/index.js";

describe("KnowledgeGraph", () => {

    it("stores knowledge nodes", () => {

        const graph = new KnowledgeGraph();

        const node = new KnowledgeNode(
            "node-1",
            "memory",
            "First Node"
        );

        graph.addNode(node);

        expect(graph.getNode("node-1")).toBe(node);

    });

    it("stores knowledge relations", () => {

        const graph = new KnowledgeGraph();

        graph.addNode(new KnowledgeNode("A","memory","A"));
        graph.addNode(new KnowledgeNode("B","memory","B"));

        const relation = new KnowledgeRelation(
            "rel-1",
            "A",
            "B",
            KnowledgeRelationType.DependsOn
        );

        graph.addRelation(relation);

        expect(graph.getRelation("rel-1")).toBe(relation);
        expect(graph.getRelations()).toHaveLength(1);

    });

});
