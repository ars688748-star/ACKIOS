import { ReleaseAssetService } from "./ReleaseAssetService.js";

import { SourcePackageBuilder } from "./SourcePackageBuilder.js";

import { InstallerPackageBuilder } from "./InstallerPackageBuilder.js";

import { ChecksumGenerator } from "./ChecksumGenerator.js";



export class ReleaseAssetFactory {



    public static create(){


        return new ReleaseAssetService(


            new SourcePackageBuilder(),


            new InstallerPackageBuilder(),


            new ChecksumGenerator()


        );



    }


}
