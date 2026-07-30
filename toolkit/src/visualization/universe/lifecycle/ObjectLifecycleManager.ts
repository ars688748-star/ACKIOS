import { ObjectRegistry } from "./ObjectRegistry.js";


export class ObjectLifecycleManager {


    public constructor(

        private readonly registry:

            ObjectRegistry


    ) {}



    public register(

        id:string,

        object:unknown

    ) {


        this.registry.add(

            id,

            object

        );


    }


}
