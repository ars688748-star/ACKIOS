import { ReleaseTagService } from "./ReleaseTagService.js";



export class ReleaseTagFactory {



    public static create(){


        return new ReleaseTagService();


    }


}
