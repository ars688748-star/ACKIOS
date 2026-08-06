import { VersionManager } from "./VersionManager.js";
import { ReleaseCandidateBuilder } from "./ReleaseCandidateBuilder.js";


export class ReleaseCandidateService {


    public constructor(

        private readonly version: VersionManager,

        private readonly builder: ReleaseCandidateBuilder

    ){}



    public create(){


        return this.builder.build({


            name:

                "ACKIOS",


            version:

                this.version.current(),


            codename:

                "Foundation",


            createdAt:

                new Date()


        });


    }


}
