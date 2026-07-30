export interface UniverseRuntimeAdapter {


    start():

        void;



    stop():

        void;



    status():

        string;


}





export class DefaultUniverseRuntimeAdapter

implements UniverseRuntimeAdapter {



    private running = false;




    public start():

        void {


        this.running = true;


    }




    public stop():

        void {


        this.running = false;


    }





    public status():

        string {


        return this.running

            ? "running"

            : "stopped";


    }


}
