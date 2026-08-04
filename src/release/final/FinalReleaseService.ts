import type { FinalReleaseReport } from "./FinalReleaseReport.js";

import { TagPreparation } from "./TagPreparation.js";

import { AssetPreparation } from "./AssetPreparation.js";

import { ReleaseConfirmation } from "./ReleaseConfirmation.js";



export class FinalReleaseService {



    private readonly tag =

        new TagPreparation();



    private readonly assets =

        new AssetPreparation();



    private readonly confirmation =

        new ReleaseConfirmation();





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
