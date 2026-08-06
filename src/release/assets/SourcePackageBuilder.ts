import type { ReleaseAsset } from "./ReleaseAsset.js";
import type { IAssetBuilder } from "./IAssetBuilder.js";


export class SourcePackageBuilder implements IAssetBuilder {


    public readonly name = "source";



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
