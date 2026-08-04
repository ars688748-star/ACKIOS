import { VersionManager } from "./VersionManager.js";

import { ReleaseCandidateBuilder } from "./ReleaseCandidateBuilder.js";



export class ReleaseCandidateService {



    private readonly version =

        new VersionManager();




    private readonly builder =

        new ReleaseCandidateBuilder();





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
