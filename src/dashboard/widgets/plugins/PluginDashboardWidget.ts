import type { DashboardWidget } from "../../core/DashboardWidget.js";

import type { PluginWidgetService } from "./PluginWidgetService.js";



export class PluginDashboardWidget implements DashboardWidget {



    public readonly id =

        "plugins";



    public readonly title =

        "Plugins";





    public constructor(

        private readonly service:

            PluginWidgetService

    ){}





    public getData():

        unknown {


        return this.service.getWidget();


    }


}
