import type { ReleaseAsset } from "./ReleaseAsset.js";
import type { IAssetBuilder } from "./IAssetBuilder.js";


export class InstallerPackageBuilder implements IAssetBuilder {


    public readonly name = "installer";



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
