import type { ArchitectureGraphProvider } from "../../../architecture/ArchitectureGraphProvider.js";

import type { ArchitectureWidgetModel } from "./ArchitectureWidgetModel.js";



export class ArchitectureWidgetService {



    public constructor(

        private readonly provider:

            ArchitectureGraphProvider

    ){}





    public async getWidget(

        root:

            string

    ):

        Promise<ArchitectureWidgetModel> {



        const graph =

            await this.provider.getGraph(

                root

            );



        return {


            nodes:

                graph.nodes.length,



            dependencies:

                graph.edges.length,



            status:

                "healthy"


        };


    }


}
