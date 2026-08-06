import type { ReleaseTag } from "./ReleaseTag.js";

import { RoadmapReleaseUpdater } from "./RoadmapReleaseUpdater.js";



export class ReleaseTagService {



    public constructor(


        private readonly roadmap:

            RoadmapReleaseUpdater


    ){}





    public create():

        ReleaseTag {



        this.roadmap.update();




        return {


            version:

                "1.0.0",



            tag:

                "v1.0.0",



            status:

                "released",



            createdAt:

                new Date()


        };


    }


}
