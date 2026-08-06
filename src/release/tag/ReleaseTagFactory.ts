import { ReleaseTagService } from "./ReleaseTagService.js";

import { RoadmapReleaseUpdater } from "./RoadmapReleaseUpdater.js";



export class ReleaseTagFactory {



    public static create(){


        return new ReleaseTagService(


            new RoadmapReleaseUpdater()


        );


    }


}
