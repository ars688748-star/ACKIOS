import { SourcePackageBuilder } from "./SourcePackageBuilder.js";

import { InstallerPackageBuilder } from "./InstallerPackageBuilder.js";

import { ChecksumGenerator } from "./ChecksumGenerator.js";



export class ReleaseAssetService {



    public build(){



        const source =

            new SourcePackageBuilder()

                .build();



        const installer =

            new InstallerPackageBuilder()

                .build();



        const checksum =

            new ChecksumGenerator()

                .generate();





        return {



            source,



            installer,



            checksum,



            ready:


                source.ready &&

                installer.ready &&

                checksum.ready



        };


    }


}
