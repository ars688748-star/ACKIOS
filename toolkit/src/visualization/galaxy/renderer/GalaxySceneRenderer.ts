import type { GalaxyNode } from "../model/GalaxyNode.js";
import type { GalaxyEdge } from "../model/GalaxyEdge.js";


export interface GalaxyRenderFrame {

    readonly nodes: GalaxyNode[];

    readonly edges: GalaxyEdge[];

    readonly timestamp: Date;

}



export class GalaxySceneRenderer {


    public render(
        nodes: GalaxyNode[],
        edges: GalaxyEdge[]
    ): GalaxyRenderFrame {


        return {

            nodes,

            edges,

            timestamp: new Date()

        };

    }


}
