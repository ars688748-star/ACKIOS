import { GitHubReleaseService } from "./GitHubReleaseService.js";



export class GitHubReleaseFactory {



    public static create(){


        return new GitHubReleaseService();


    }


}
