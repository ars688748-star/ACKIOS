import type { GalaxyNode } from "../model/GalaxyNode.js";


export class GalaxyInteractionController {


    private selectedNode?: GalaxyNode;



    public selectNode(
        node: GalaxyNode
    ): void {

        this.selectedNode = node;

    }



    public getSelectedNode():

        GalaxyNode | undefined {

        return this.selectedNode;

    }



    public clearSelection(): void {

        this.selectedNode = undefined;

    }


}
