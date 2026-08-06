import { ReleaseExecutionService } from "./ReleaseExecutionService.js";
import { GitTagExecution } from "./GitTagExecution.js";
import { GitHubReleaseExecution } from "./GitHubReleaseExecution.js";
import { ReleaseAssetCheck } from "./ReleaseAssetCheck.js";


export class ReleaseExecutionFactory {


    public static create(){


        return new ReleaseExecutionService(

            new GitTagExecution(),

            new GitHubReleaseExecution(),

            new ReleaseAssetCheck()

        );


    }


}
