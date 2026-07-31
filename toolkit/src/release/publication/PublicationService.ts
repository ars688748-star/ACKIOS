import { GitTagManager } from "./GitTagManager.js";

import { GitHubReleasePublisher } from "./GitHubReleasePublisher.js";

import { ReleaseNotesGenerator } from "./ReleaseNotesGenerator.js";

import { AssetUploader } from "./AssetUploader.js";

import { PublicationWorkflow } from "./PublicationWorkflow.js";



export class PublicationService {



    private readonly tag =

        new GitTagManager();



    private readonly publisher =

        new GitHubReleasePublisher();



    private readonly notes =

        new ReleaseNotesGenerator();



    private readonly assets =

        new AssetUploader();



    private readonly workflow =

        new PublicationWorkflow();





    public prepare(){



        return {



            tag:

                this.tag.createTag(),



            notes:

                this.notes.generate(),



            assets:

                this.assets.upload(),



            workflow:

                this.workflow.execute(),



            publish:

                this.publisher.publish()



        };


    }


}
