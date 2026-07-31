import { ReleaseVisibilityScanner } from "./ReleaseVisibilityScanner.js";



export class ReleaseVisibilityService {



    private readonly scanner =

        new ReleaseVisibilityScanner();





    public check(

        files:

            string[]

    ){


        return this.scanner.scan(

            files

        );


    }


}
