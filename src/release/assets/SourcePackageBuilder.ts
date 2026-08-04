import type { ReleaseAsset } from "./ReleaseAsset.js";



export class SourcePackageBuilder {



    public build():

        ReleaseAsset {



        return {



            name:

                "ACKIOS-source.zip",



            type:

                "source",



            ready:

                true



        };


    }


}
