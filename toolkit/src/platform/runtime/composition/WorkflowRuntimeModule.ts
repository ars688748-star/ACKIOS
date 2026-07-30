import type { RuntimeModule } from "../core/RuntimeModule.js";


export class WorkflowRuntimeModule

implements RuntimeModule {



    public readonly name =

        "workflow-runtime";



    private running = false;



    public start():

        void {


        this.running = true;


    }





    public stop():

        void {


        this.running = false;


    }





    public health():

        string {


        return this.running

            ? "running"

            : "stopped";


    }


}
