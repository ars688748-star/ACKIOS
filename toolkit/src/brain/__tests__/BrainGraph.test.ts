import { describe,it,expect } from "vitest";

import { BrainGraph } from "../graph/BrainGraph.js";

describe("BrainGraph",()=>{

    it("stores nodes",()=>{

        const graph=new BrainGraph();

        graph.engine.addNode({
            id:"node1",
            type:"module"
        });

        expect(graph.engine.getNode("node1")).toBeDefined();

    });

    it("stores edges",()=>{

        const graph=new BrainGraph();

        graph.engine.addNode({id:"A",type:"module"});
        graph.engine.addNode({id:"B",type:"module"});

        graph.engine.addEdge({
            from:"A",
            to:"B",
            type:"dependency"
        });

        expect(graph.query.neighbors("A")).toHaveLength(1);

    });

});
