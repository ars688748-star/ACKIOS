import type { ArchitectureGraph } from "../architecture/graph/ArchitectureGraph.js";
import { ArchitectureGraphProvider } from "../architecture/ArchitectureGraphProvider.js";


export class GalaxyArchitectureProviderBridge {

    public constructor(
        private readonly provider =
            new ArchitectureGraphProvider()
    ) {}


    public async getGalaxyArchitectureGraph(
        root: string
    ): Promise<ArchitectureGraph> {


        return await this.provider.getGraph(
            root
        );

    }


    public mapToGalaxyNodes(
        graph: ArchitectureGraph
    ) {

        return graph.nodes.map(
            node => ({
                id: node.name,
                name: node.name,
                path: node.path,
                type: node.type
            })
        );

    }


    public mapToGalaxyEdges(
        graph: ArchitectureGraph
    ) {

        return graph.edges.map(
            edge => ({
                from: edge.from,
                to: edge.to
            })
        );

    }

}

