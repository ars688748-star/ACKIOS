import { ReleaseSealService } from "./ReleaseSealService.js";



export class ReleaseSealFactory {



    public static create(){


        return new ReleaseSealService();



    }


}
