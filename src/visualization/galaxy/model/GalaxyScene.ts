import type { GalaxyNode } from "./GalaxyNode.js";
import type { GalaxyEdge } from "./GalaxyEdge.js";


export interface GalaxyScene {

    readonly nodes: GalaxyNode[];

    readonly edges: GalaxyEdge[];

    readonly createdAt: Date;

}
