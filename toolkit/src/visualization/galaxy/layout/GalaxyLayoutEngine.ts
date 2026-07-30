import type { GalaxyScene } from "../model/GalaxyScene.js";
import type { GalaxyNode } from "../model/GalaxyNode.js";


export class GalaxyLayoutEngine {


    public layout(
        scene: GalaxyScene
    ): GalaxyNode[] {


        return scene.nodes.map(
            (node, index) => ({

                ...node,

                position: {

                    x: index * 100,

                    y: index * 50,

                    z: 0

                }

            })
        );


    }


}
