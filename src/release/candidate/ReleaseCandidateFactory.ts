import { ReleaseCandidateService } from "./ReleaseCandidateService.js";
import { VersionManager } from "./VersionManager.js";
import { ReleaseCandidateBuilder } from "./ReleaseCandidateBuilder.js";


export class ReleaseCandidateFactory {


    public static create(){


        return new ReleaseCandidateService(

            new VersionManager(),

            new ReleaseCandidateBuilder()

        );


    }


}
