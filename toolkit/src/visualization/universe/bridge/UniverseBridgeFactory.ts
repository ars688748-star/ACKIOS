import { BrainUniverseBridge } from "./BrainUniverseBridge.js";



export class UniverseBridgeFactory {



    public static create(

        receiver:any

    ){


        return new BrainUniverseBridge(

            receiver

        );


    }


}
