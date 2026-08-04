import { PackagingEngine } from "./PackagingEngine.js";



export class PackagingService {



    private readonly engine =

        new PackagingEngine();





    public create(

        target:

            "windows"

            | "linux"

            | "macos"

    ){


        return this.engine.build(

            target

        );


    }


}
