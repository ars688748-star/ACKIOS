import { PublicationService } from "./PublicationService.js";

import { GitTagManager } from "./GitTagManager.js";
import { GitHubReleasePublisher } from "./GitHubReleasePublisher.js";
import { ReleaseNotesGenerator } from "./ReleaseNotesGenerator.js";
import { AssetUploader } from "./AssetUploader.js";
import { PublicationWorkflow } from "./PublicationWorkflow.js";


export class PublicationFactory {


    public static create(){


        return new PublicationService(

            new GitTagManager(),

            new GitHubReleasePublisher(),

            new ReleaseNotesGenerator(),

            new AssetUploader(),

            new PublicationWorkflow()

        );


    }


}
