import { GitHubReleaseService } from "./GitHubReleaseService.js";

import { ReleaseAssetManager } from "./ReleaseAssetManager.js";

import { ReleasePublisher } from "./ReleasePublisher.js";

import { ReleaseWorkflow } from "./ReleaseWorkflow.js";



export class GitHubReleaseFactory {



    public static create(){


        return new GitHubReleaseService(


            new ReleaseAssetManager(),


            new ReleasePublisher(),


            new ReleaseWorkflow()


        );


    }


}
