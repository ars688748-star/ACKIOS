import { PublicLaunchService } from "./PublicLaunchService.js";



export class PublicLaunchFactory {



    public static create(){


        return new PublicLaunchService();



    }


}
