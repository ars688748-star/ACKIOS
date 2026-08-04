import type { GalaxyNode } from "../model/GalaxyNode.js";

import type { GalaxyEdge } from "../model/GalaxyEdge.js";

import type { GalaxyVisualScene } from "./GalaxyVisualScene.js";

import { GalaxyNodeRenderer } from "./GalaxyNodeRenderer.js";

import { GalaxyEdgeRenderer } from "./GalaxyEdgeRenderer.js";



export class GalaxySceneRenderer {



    private readonly nodeRenderer =
        new GalaxyNodeRenderer();



    private readonly edgeRenderer =
        new GalaxyEdgeRenderer();



    public render(

        nodes: GalaxyNode[],

        edges: GalaxyEdge[]

    ): GalaxyVisualScene {



        return {


            nodes:

                nodes.map(

                    node =>

                        this.nodeRenderer.create(
                            node
                        )

                ),



            edges:

                edges.map(

                    edge =>

                        this.edgeRenderer.create(
                            edge
                        )

                )


        };


    }


}
