import { ReleaseFreezeService } from "./ReleaseFreezeService.js";



export class ReleaseFreezeFactory {



    public static create(){


        return new ReleaseFreezeService();



    }


}
