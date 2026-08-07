import type { HealthEngine } from "../../../health/HealthEngine.js";

import type { HealthWidgetModel } from "./HealthWidgetModel.js";



export class HealthWidgetService {



    public constructor(

        private readonly engine:

            HealthEngine

    ){}





    public async getWidget():

        Promise<HealthWidgetModel> {



        const results =

            await this.engine.execute();




        return {


            status:

                results.some(

                    result => result.status === "ERROR"

                )

                    ? "ERROR"

                    :

                results.some(

                    result => result.status === "WARNING"

                )

                    ? "WARNING"

                    :

                    "OK",



            checks:

                results.length,



            warnings:

                results.filter(

                    result => result.status === "WARNING"

                ).length,



            errors:

                results.filter(

                    result => result.status === "ERROR"

                ).length


        };


    }


}
