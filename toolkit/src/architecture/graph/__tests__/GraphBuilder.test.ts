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
            ]

        });

        expect(graph.nodes).toHaveLength(1);

        expect(graph.edges).toHaveLength(0);

        expect(graph.nodes[0].name).toBe("src");

    });

});
