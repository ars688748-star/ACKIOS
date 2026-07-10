import { describe, expect, it } from "vitest";

import {
    KnowledgeGraph,
    KnowledgeNode
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

});
