import type { DashboardService } from "../core/DashboardService.js";



export class DashboardController {



    public constructor(

        private readonly dashboard:

            DashboardService

    ){}





    public getDashboard(){


        return {


            widgets:

                this.dashboard.widgets()

                    .map(

                        widget => ({


                            id:

                                widget.id,


                            title:

                                widget.title,


                            data:

                                widget.getData()


                        })

                    )


        };


    }


}

