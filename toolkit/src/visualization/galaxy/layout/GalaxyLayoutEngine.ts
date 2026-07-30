import type { GalaxyScene } from "../model/GalaxyScene.js";
import type { GalaxyNode } from "../model/GalaxyNode.js";


export class GalaxyLayoutEngine {


    public layout(
        scene: GalaxyScene
    ): GalaxyNode[] {


        const directories =
            scene.nodes.filter(
                node =>
                    node.type === "directory"
            );


        const files =
            scene.nodes.filter(
                node =>
                    node.type === "file"
            );



        const directoryNodes =
            directories.map(

                (node, index) => ({

                    ...node,

                    position: {

                        x: index * 500,

                        y: 0,

                        z: 0

                    }

                })

            );



        const fileNodes =
            files.map(

                (node, index) => ({

                    ...node,

                    position: {

                        x: (index + 1) * 120,

                        y: 200,

                        z: 0

                    }

                })

            );



        return [

            ...directoryNodes,

            ...fileNodes

        ];

    }


}
