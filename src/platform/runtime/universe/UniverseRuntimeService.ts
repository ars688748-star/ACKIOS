import type { UniverseRuntimeAdapter } from "./UniverseRuntimeAdapter.js";



export class UniverseRuntimeService {



    public constructor(

        private readonly adapter:

            UniverseRuntimeAdapter

    ) {}





    public start():

        void {


        this.adapter.start();


    }





    public stop():

        void {


        this.adapter.stop();


    }





    public getStatus():

        string {


        return this.adapter.status();


    }


}
