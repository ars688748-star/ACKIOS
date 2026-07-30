import type { RuntimeModule } from "../core/RuntimeModule.js";



export class RuntimeModuleRegistry {



    private readonly modules:

        RuntimeModule[] = [];





    public add(

        module: RuntimeModule

    ): void {


        this.modules.push(

            module

        );


    }





    public getAll():

        RuntimeModule[] {


        return [

            ...this.modules

        ];


    }





    public count():

        number {


        return this.modules.length;


    }


}
