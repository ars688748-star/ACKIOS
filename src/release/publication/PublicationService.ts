import { GitTagManager } from "./GitTagManager.js";
import { GitHubReleasePublisher } from "./GitHubReleasePublisher.js";
import { ReleaseNotesGenerator } from "./ReleaseNotesGenerator.js";
import { AssetUploader } from "./AssetUploader.js";
import { PublicationWorkflow } from "./PublicationWorkflow.js";


export class PublicationService {


    public constructor(

        private readonly tag: GitTagManager,

        private readonly publisher: GitHubReleasePublisher,

        private readonly notes: ReleaseNotesGenerator,

        private readonly assets: AssetUploader,

        private readonly workflow: PublicationWorkflow

    ){}



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
