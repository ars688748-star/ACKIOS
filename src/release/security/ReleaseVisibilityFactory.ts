import { ReleaseVisibilityService } from "./ReleaseVisibilityService.js";
import { ReleaseVisibilityScanner } from "./ReleaseVisibilityScanner.js";
import { PrivateFileRule } from "./PrivateFileRule.js";


export class ReleaseVisibilityFactory {


    public static create(){


        const rule =
            new PrivateFileRule();


        const scanner =
            new ReleaseVisibilityScanner(
                rule
            );


        return new ReleaseVisibilityService(
            scanner
        );


    }


}
