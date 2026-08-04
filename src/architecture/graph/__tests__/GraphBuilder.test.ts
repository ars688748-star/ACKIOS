import { describe, expect, it } from "vitest";

import { GraphBuilder } from "../GraphBuilder.js";

describe("GraphBuilder", () => {

    it("builds graph from architecture model", () => {

        const builder = new GraphBuilder();

        const graph = builder.build({

            nodes: [
                {
                    name: "src",
                    path: "/src",
                    type: "directory"
                }
            ],

            edges: []

        });

        expect(graph.nodes).toHaveLength(1);
        expect(graph.edges).toHaveLength(0);
        expect(graph.nodes[0].name).toBe("src");

    });

    it("preserves dependency edges", () => {

        const builder = new GraphBuilder();

        const graph = builder.build({

            nodes: [],

            edges: [
                {
                    from: "/src/index.ts",
                    to: "./brain.js",
                    type: "import"
                }
            ]

        });

        expect(graph.edges).toHaveLength(1);

        expect(graph.edges[0]).toEqual({
            from: "/src/index.ts",
            to: "./brain.js",
            type: "import"
        });

    });

});
