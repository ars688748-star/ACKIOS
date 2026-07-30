import type { RuntimeStartupReport } from "./RuntimeStartupReport.js";

import { RuntimeStartupPipeline } from "./RuntimeStartupPipeline.js";



export class RuntimeStartupService {



    private readonly pipeline =

        new RuntimeStartupPipeline();





    public start():

        RuntimeStartupReport {


        return this.pipeline.execute();


    }





    public addStep(

        name:

            string

    ): void {


        this.pipeline.add({


            name,


            execute(){}


        });


    }


}
