import type { GitHubReleaseConfig } from "./GitHubReleaseConfig.js";

import { ReleaseAssetManager } from "./ReleaseAssetManager.js";

import { ReleasePublisher } from "./ReleasePublisher.js";

import { ReleaseWorkflow } from "./ReleaseWorkflow.js";



export class GitHubReleaseService {



    public constructor(


        private readonly assets:

            ReleaseAssetManager,


        private readonly publisher:

            ReleasePublisher,


        private readonly workflow:

            ReleaseWorkflow


    ){}





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
