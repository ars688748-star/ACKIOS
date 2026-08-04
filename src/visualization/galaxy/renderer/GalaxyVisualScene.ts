import type { GalaxyNodeVisual } from "./GalaxyNodeVisual.js";

import type { GalaxyEdgeVisual } from "./GalaxyEdgeVisual.js";



export interface GalaxyVisualScene {


    readonly nodes:

        GalaxyNodeVisual[];



    readonly edges:

        GalaxyEdgeVisual[];


}
