import type { GalaxyEdge } from "../model/GalaxyEdge.js";

import type { GalaxyEdgeVisual } from "./GalaxyEdgeVisual.js";


export class GalaxyEdgeRenderer {


    public create(

        edge: GalaxyEdge

    ): GalaxyEdgeVisual {


        return {

            id:

                `${edge.from}-${edge.to}`,

            source: edge,


            from:

                edge.from,


            to:

                edge.to,


            type:

                edge.type,


            active: true

        };


    }



    public disable(

        visual: GalaxyEdgeVisual

    ): GalaxyEdgeVisual {


        return {

            ...visual,

            active: false

        };


    }



    public enable(

        visual: GalaxyEdgeVisual

    ): GalaxyEdgeVisual {


        return {

            ...visual,

            active: true

        };


    }


}
