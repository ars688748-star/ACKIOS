import { ReleaseGateService } from "./ReleaseGateService.js";



export class ReleaseGateFactory {



    public static create(){


        return new ReleaseGateService();


    }


}
