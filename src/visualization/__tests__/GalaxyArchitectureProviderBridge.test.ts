import { describe, expect, test } from "vitest";

import { GalaxyArchitectureProviderBridge } from "../GalaxyArchitectureProviderBridge.js";


describe(
    "GalaxyArchitectureProviderBridge",
    () => {


        test(
            "should map architecture graph to galaxy data",
            async () => {


                const bridge =
                    new GalaxyArchitectureProviderBridge();


                const graph =
                    await bridge.getGalaxyArchitectureGraph(
                        "."
                    );


                const nodes =
                    bridge.mapToGalaxyNodes(
                        graph
                    );


                const edges =
                    bridge.mapToGalaxyEdges(
                        graph
                    );


                expect(
                    graph
                ).toBeDefined();


                expect(
                    nodes
                ).toBeDefined();


                expect(
                    edges
                ).toBeDefined();


                expect(
                    Array.isArray(nodes)
                ).toBe(true);


                expect(
                    Array.isArray(edges)
                ).toBe(true);


            }
        );


    }
);
