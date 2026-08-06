import { ReleaseVisibilityScanner } from "./ReleaseVisibilityScanner.js";


export class ReleaseVisibilityService {


    public constructor(

        private readonly scanner: ReleaseVisibilityScanner

    ) {}



    public check(

        files:

            string[]

    ){


        return this.scanner.scan(

            files

        );


    }


}
