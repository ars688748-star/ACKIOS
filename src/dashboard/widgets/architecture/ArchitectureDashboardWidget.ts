import type { DashboardWidget } from "../../core/DashboardWidget.js";

import type { ArchitectureWidgetService } from "./ArchitectureWidgetService.js";



export class ArchitectureDashboardWidget implements DashboardWidget {



    public readonly id =

        "architecture";



    public readonly title =

        "Architecture";





    public constructor(

        private readonly service:

            ArchitectureWidgetService

    ){}





    public async getData(){


        return this.service.getWidget(

            process.cwd()

        );


    }


}
