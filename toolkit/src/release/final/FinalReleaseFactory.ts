import { FinalReleaseService } from "./FinalReleaseService.js";



export class FinalReleaseFactory {



    public static create(){


        return new FinalReleaseService();



    }


}
