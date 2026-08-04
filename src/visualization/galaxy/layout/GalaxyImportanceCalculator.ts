import type { GalaxyScene } from "../model/GalaxyScene.js";


export class GalaxyImportanceCalculator {


    public calculate(

        nodeId: string,

        scene: GalaxyScene

    ): number {



        const connections =

            scene.edges.filter(

                edge =>

                    edge.from === nodeId ||

                    edge.to === nodeId

            ).length;



        const node =

            scene.nodes.find(

                item =>

                    item.id === nodeId

            );



        if (!node) {

            return 0;

        }



        const typeBonus =

            node.type === "directory"

                ? 20

                : 0;



        return (

            connections * 10

        ) + typeBonus;


    }


}
