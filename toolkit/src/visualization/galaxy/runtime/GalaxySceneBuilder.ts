import type { ArchitectureGraph } from "../../../architecture/graph/ArchitectureGraph.js";

import type { GalaxyScene } from "../model/GalaxyScene.js";



export class GalaxySceneBuilder {



    public build(

        graph: ArchitectureGraph

    ): GalaxyScene {



        return {

            nodes:

                graph.nodes.map(

                    (node, index) => ({

                        id: node.name,

                        name: node.name,

                        type: node.type,

                        path: node.path,

                        position: {

                            x: index * 10,

                            y: 0,

                            z: 0

                        }

                    })

                ),



            edges:

                graph.edges.map(

                    edge => ({

                        from: edge.from,

                        to: edge.to,

                        type: "dependency"

                    })

                ),



            createdAt:

                new Date()

        };


    }


}
