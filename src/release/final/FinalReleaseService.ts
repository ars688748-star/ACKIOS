import type { FinalReleaseReport } from "./FinalReleaseReport.js";

import type { TagPreparation } from "./TagPreparation.js";
import type { AssetPreparation } from "./AssetPreparation.js";
import type { ReleaseConfirmation } from "./ReleaseConfirmation.js";


export class FinalReleaseService {



    public constructor(

        private readonly tag:

            TagPreparation,


        private readonly assets:

            AssetPreparation,


        private readonly confirmation:

            ReleaseConfirmation

    ){}





    public execute(){



        const tag =

            this.tag.prepare();



        const assets =

            this.assets.prepare();



        const confirmation =

            this.confirmation.confirm();





        const report:

            FinalReleaseReport = {



                version:

                    "1.0.0",



                status:

                    "ready",



                checks:


                    [


                        "tag",


                        "assets",


                        "confirmation"


                    ]


            };





        return {



            report,



            tag,



            assets,



            confirmation



        };


    }


}
