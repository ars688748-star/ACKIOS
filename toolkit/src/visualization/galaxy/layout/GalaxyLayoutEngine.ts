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



        const nodes = [

            ...directories.map(

                (node, index) => ({

                    ...node,

                    position: {

                        x: index * 500,

                        y: 0,

                        z: 0

                    }

                })

            ),



            ...files.map(

                (node, index) => ({

                    ...node,

                    position: {

                        x: (index + 1) * 120,

                        y: 200,

                        z: 0

                    }

                })

            )

        ];



        return this.applyGravity(

            nodes,

            scene

        );

    }



    private applyGravity(

        nodes: GalaxyNode[],

        scene: GalaxyScene

    ): GalaxyNode[] {



        let result =
            [...nodes];



        for (const edge of scene.edges) {


            const from =
                result.find(
                    node =>
                        node.id === edge.from
                );


            const to =
                result.find(
                    node =>
                        node.id === edge.to
                );



            if (!from || !to) {

                continue;

            }



            result = result.map(

                    node =>

                        node.id === to.id

                            ? {

                                ...node,

                                position: {

                                    x:
                                        (
                                            node.position.x +
                                            from.position.x

                                        ) / 2,


                                    y:
                                        (
                                            node.position.y +
                                            from.position.y

                                        ) / 2,


                                    z:
                                        node.position.z ?? 0

                                }

                            }

                            : node

                );


        }



        return result;

    }


}


