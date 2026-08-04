import { ReleaseVerificationService } from "./ReleaseVerificationService.js";



export class ReleaseVerificationFactory {



    public static create(){


        return new ReleaseVerificationService();


    }


}
