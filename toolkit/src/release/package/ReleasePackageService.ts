import { ReleasePackageBuilder } from "./ReleasePackageBuilder.js";

import { ChecksumGenerator } from "./ChecksumGenerator.js";



export class ReleasePackageService {



    private readonly builder =

        new ReleasePackageBuilder();



    private readonly checksum =

        new ChecksumGenerator();





    public prepare(){



        const packageData =

            this.builder.build();




        const files =

            packageData.manifest.assets.map(

                asset => asset.name

            );




        return {



            package:

                packageData,



            checksums:

                this.checksum.generate(

                    files

                )


        };


    }


}
