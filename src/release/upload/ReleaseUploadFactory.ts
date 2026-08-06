import { ReleaseUploadService } from "./ReleaseUploadService.js";

import { UploadQueue } from "./UploadQueue.js";

import { GitHubReleaseTarget } from "./GitHubReleaseTarget.js";

import { UploadExecutor } from "./UploadExecutor.js";



export class ReleaseUploadFactory {



    public static create(){


        return new ReleaseUploadService(


            new UploadQueue(),


            new GitHubReleaseTarget(),


            new UploadExecutor()


        );


    }


}
