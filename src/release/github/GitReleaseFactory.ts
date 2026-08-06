import { GitReleaseService } from "./GitReleaseService.js";

import { GitReleaseManager } from "./GitReleaseManager.js";


export class GitReleaseFactory {



    public static create(){


        return new GitReleaseService(


            new GitReleaseManager()


        );


    }


}
