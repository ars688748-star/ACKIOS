import { GitReleaseManager } from "./GitReleaseManager.js";


export class GitReleaseService {



    public constructor(

        private readonly manager:

            GitReleaseManager

    ){}





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
