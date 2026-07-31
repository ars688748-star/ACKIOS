import type { GitHubReleaseConfig } from "./GitHubReleaseConfig.js";

import { ReleaseAssetManager } from "./ReleaseAssetManager.js";

import { ReleasePublisher } from "./ReleasePublisher.js";

import { ReleaseWorkflow } from "./ReleaseWorkflow.js";



export class GitHubReleaseService {



    private readonly assets =

        new ReleaseAssetManager();



    private readonly publisher =

        new ReleasePublisher();



    private readonly workflow =

        new ReleaseWorkflow();





    public prepare(){



        const config:

            GitHubReleaseConfig = {


                version:

                    "1.0.0",



                tag:

                    "v1.0.0",



                repository:

                    "ACKIOS",



                draft:

                    false


            };




        return {


            config,


            assets:

                this.assets.collect(),



            workflow:

                this.workflow.execute(),



            publish:

                this.publisher.publish()



        };


    }


}
