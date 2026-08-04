import { GitReleaseManager } from "./GitReleaseManager.js";



export class GitReleaseService {



    private readonly manager =

        new GitReleaseManager();





    public prepare(){


        return {


            tag:

                this.manager.prepareTag(),



            assets:

                this.manager.prepareAssets(),



            notes:

                this.manager.prepareNotes(),



            checklist:

                this.manager.prepareChecklist()



        };


    }


}
