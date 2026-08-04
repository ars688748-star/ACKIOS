import { ReleaseCandidateService } from "./ReleaseCandidateService.js";



export class ReleaseCandidateFactory {



    public static create(){


        return new ReleaseCandidateService();


    }


}
