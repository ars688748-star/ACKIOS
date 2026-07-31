import type { ReleasePackageAsset } from "./ReleasePackageAsset.js";



export interface AssetManifest {



    readonly version:

        string;



    readonly assets:

        ReleasePackageAsset[];



}
