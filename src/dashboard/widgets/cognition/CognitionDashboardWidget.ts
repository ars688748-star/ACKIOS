import type { DashboardWidget } from "../../core/DashboardWidget.js";

import type { CognitionWidgetService } from "./CognitionWidgetService.js";


export class CognitionDashboardWidget implements DashboardWidget {


    public readonly id =
        "cognition";


    public readonly title =
        "Cognition";



    public constructor(
        private readonly service: CognitionWidgetService
    ){}



    public async getData(){

        return this.service.getWidget();

    }


}
