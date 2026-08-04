import { GitReleaseService } from "./GitReleaseService.js";



export class GitReleaseFactory {



    public static create(){


        return new GitReleaseService();


    }


}
