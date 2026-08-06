import { ReleasePackageBuilder } from "./ReleasePackageBuilder.js";
import { ChecksumGenerator } from "./ChecksumGenerator.js";


export class ReleasePackageService {


    public constructor(

        private readonly builder: ReleasePackageBuilder,

        private readonly checksum: ChecksumGenerator

    ){}



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
