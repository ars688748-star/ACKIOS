import { GitTagExecution } from "./GitTagExecution.js";

import { GitHubReleaseExecution } from "./GitHubReleaseExecution.js";

import { ReleaseAssetCheck } from "./ReleaseAssetCheck.js";



export class ReleaseExecutionService {



    private readonly tag =

        new GitTagExecution();



    private readonly github =

        new GitHubReleaseExecution();



    private readonly assets =

        new ReleaseAssetCheck();





    public execute(){



        const tag =

            this.tag.execute();



        const release =

            this.github.execute();



        const assets =

            this.assets.verify();





        return {



            version:

                "1.0.0",



            tag,



            release,



            assets,



            ready:


                tag.created &&

                release.published &&

                assets.valid



        };


    }


}
