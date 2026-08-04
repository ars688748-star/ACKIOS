import type { ReleaseAsset } from "./ReleaseAsset.js";



export class InstallerPackageBuilder {



    public build():

        ReleaseAsset {



        return {



            name:

                "ACKIOS-installer",



            type:

                "installer",



            ready:

                true



        };


    }


}
