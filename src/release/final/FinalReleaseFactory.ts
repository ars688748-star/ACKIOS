import { FinalReleaseService } from "./FinalReleaseService.js";

import { TagPreparation } from "./TagPreparation.js";
import { AssetPreparation } from "./AssetPreparation.js";
import { ReleaseConfirmation } from "./ReleaseConfirmation.js";


export class FinalReleaseFactory {



    public static create(){


        return new FinalReleaseService(


            new TagPreparation(),


            new AssetPreparation(),


            new ReleaseConfirmation()


        );


    }


}
