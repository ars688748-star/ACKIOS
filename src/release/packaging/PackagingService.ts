import type { PackageTarget } from "./PackageTarget.js";
import { PackagingEngine } from "./PackagingEngine.js";


export class PackagingService {


    public constructor(

        private readonly engine:

            PackagingEngine

    ){}



    public create(

        target:

            PackageTarget

    ){


        return this.engine.build(

            target

        );


    }


}
