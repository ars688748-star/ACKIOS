import type { GalaxyNode } from "../model/GalaxyNode.js";

import type { GalaxyNodeVisual } from "./GalaxyNodeVisual.js";


export class GalaxyNodeRenderer {


    public create(

        node: GalaxyNode

    ): GalaxyNodeVisual {


        return {

            id: node.id,

            source: node,

            position: {

                x: node.position.x,

                y: node.position.y,

                z: node.position.z ?? 0

            },

            radius: 1,

            selected: false

        };


    }



    public select(

        visual: GalaxyNodeVisual

    ): GalaxyNodeVisual {


        return {

            ...visual,

            selected: true

        };


    }



    public deselect(

        visual: GalaxyNodeVisual

    ): GalaxyNodeVisual {


        return {

            ...visual,

            selected: false

        };


    }


}
