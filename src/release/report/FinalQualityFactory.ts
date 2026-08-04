import { FinalQualityService } from "./FinalQualityService.js";



export class FinalQualityFactory {



    public static create(){


        return new FinalQualityService();


    }


}
