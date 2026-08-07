import type { DashboardRegistry } from "./DashboardRegistry.js";

import type { DashboardWidget } from "./DashboardWidget.js";



export class DashboardService {



    public constructor(

        private readonly registry:

            DashboardRegistry

    ){}





    public widgets():

        DashboardWidget[] {


        return this.registry.list();


    }





    public widget(

        id:

            string

    ):

        DashboardWidget | undefined {


        return this.registry.get(

            id

        );


    }


}
