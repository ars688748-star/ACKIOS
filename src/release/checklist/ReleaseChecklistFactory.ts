import { ReleaseChecklistService } from "./ReleaseChecklistService.js";



export class ReleaseChecklistFactory {



    public static create(){


        return new ReleaseChecklistService();


    }


}
