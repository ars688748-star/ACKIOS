import { LaunchConfirmationService } from "./LaunchConfirmationService.js";



export class LaunchConfirmationFactory {



    public static create(){


        return new LaunchConfirmationService();



    }


}
