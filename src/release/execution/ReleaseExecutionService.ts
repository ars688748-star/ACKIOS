import { GitTagExecution } from "./GitTagExecution.js";
import { GitHubReleaseExecution } from "./GitHubReleaseExecution.js";
import { ReleaseAssetCheck } from "./ReleaseAssetCheck.js";


export class ReleaseExecutionService {


    public constructor(

        private readonly tag: GitTagExecution,

        private readonly github: GitHubReleaseExecution,

        private readonly assets: ReleaseAssetCheck

    ){}



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
