import { ReleaseVisibilityService } from "./ReleaseVisibilityService.js";



export class ReleaseVisibilityFactory {



    public static create(){


        return new ReleaseVisibilityService();


    }


}
