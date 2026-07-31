import { ReleaseFinalService } from "./ReleaseFinalService.js";



export class ReleaseFinalFactory {



    public static create(){


        return new ReleaseFinalService();


    }


}
