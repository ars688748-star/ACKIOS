import type { RuntimeStartupStep } from "./RuntimeStartupStep.js";

import type { RuntimeStartupReport } from "./RuntimeStartupReport.js";



export class RuntimeStartupPipeline {



    private readonly steps:

        RuntimeStartupStep[] = [];





    public add(

        step: RuntimeStartupStep

    ): void {


        this.steps.push(step);


    }





    public execute():

        RuntimeStartupReport {



        const executed:

            string[] = [];




        for (const step of this.steps) {


            step.execute();


            executed.push(

                step.name

            );


        }




        return {


            success:

                true,


            steps:

                executed,


            timestamp:

                new Date()


        };


    }


}
