import type { DashboardWidget } from "../../core/DashboardWidget.js";

import type { HealthWidgetService } from "./HealthWidgetService.js";



export class HealthDashboardWidget implements DashboardWidget {



    public readonly id =

        "health";



    public readonly title =

        "Health";





    public constructor(

        private readonly service:

            HealthWidgetService

    ){}





    public async getData(){


        return this.service.getWidget();


    }


}
