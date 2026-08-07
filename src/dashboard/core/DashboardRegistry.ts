import type { DashboardWidget } from "./DashboardWidget.js";


export class DashboardRegistry {


    private readonly widgets =

        new Map<string, DashboardWidget>();





    public register(

        widget:

            DashboardWidget

    ): void {


        this.widgets.set(

            widget.id,

            widget

        );


    }





    public get(

        id:

            string

    ):

        DashboardWidget | undefined {


        return this.widgets.get(

            id

        );


    }





    public list():

        DashboardWidget[] {


        return Array.from(

            this.widgets.values()

        );


    }


}
