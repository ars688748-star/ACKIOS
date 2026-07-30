import type { RuntimeModule } from "../core/RuntimeModule.js";


export class BrainRuntimeModule

implements RuntimeModule {



    public readonly name =

        "brain-runtime";



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
