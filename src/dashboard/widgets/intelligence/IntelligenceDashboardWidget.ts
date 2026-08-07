import type { DashboardWidget } from "../../core/DashboardWidget.js";

import type { IntelligenceWidgetService } from "./IntelligenceWidgetService.js";


export class IntelligenceDashboardWidget implements DashboardWidget {


    public readonly id =
        "intelligence";


    public readonly title =
        "Intelligence";



    public constructor(
        private readonly service: IntelligenceWidgetService
    ){}



    public async getData(){

        return this.service.getWidget();

    }


}
