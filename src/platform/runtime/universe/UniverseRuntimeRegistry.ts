import type { UniverseRuntimeService } from "./UniverseRuntimeService.js";



export class UniverseRuntimeRegistry {



    private service?:

        UniverseRuntimeService;





    public register(

        service:UniverseRuntimeService

    ) {


        this.service = service;


    }





    public get():

        UniverseRuntimeService | undefined {


        return this.service;


    }


}
