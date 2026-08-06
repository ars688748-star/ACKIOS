import { ReleaseGateService } from "./ReleaseGateService.js";

import { ReleaseGateEngine } from "./ReleaseGateEngine.js";


export class ReleaseGateFactory {



    public static create(){


        return new ReleaseGateService(


            new ReleaseGateEngine()


        );


    }


}
