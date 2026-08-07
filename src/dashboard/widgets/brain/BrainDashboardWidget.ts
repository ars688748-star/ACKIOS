import type { DashboardWidget } from "../../core/DashboardWidget.js";

import type { BrainWidgetService } from "./BrainWidgetService.js";


export class BrainDashboardWidget implements DashboardWidget {


    public readonly id =
        "brain";


    public readonly title =
        "Brain";



    public constructor(
        private readonly service: BrainWidgetService
    ){}



    public async getData(){

        return this.service.getWidget();

    }


}
