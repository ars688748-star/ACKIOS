import { UploadQueue } from "./UploadQueue.js";

import { GitHubReleaseTarget } from "./GitHubReleaseTarget.js";

import { UploadExecutor } from "./UploadExecutor.js";



export class ReleaseUploadService {



    public constructor(


        private readonly queue:

            UploadQueue,


        private readonly targetService:

            GitHubReleaseTarget,


        private readonly executor:

            UploadExecutor


    ){}





    public upload(){



        const assets =

            this.queue

                .getAssets();





        const target =

            this.targetService

                .getTarget();





        const execution =

            this.executor

                .execute();





        return {



            assets,



            target,



            execution,



            ready:

                target.ready &&

                execution.uploaded



        };


    }


}
