import { ReleaseFinalService } from "./ReleaseFinalService.js";

import { ReleaseFinalChecker } from "./ReleaseFinalChecker.js";

import { ReleaseSummaryGenerator } from "./ReleaseSummaryGenerator.js";


export class ReleaseFinalFactory {



    public static create(){


        return new ReleaseFinalService(


            new ReleaseFinalChecker(),


            new ReleaseSummaryGenerator()


        );


    }


}
