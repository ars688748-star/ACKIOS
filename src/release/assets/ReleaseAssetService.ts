import type { SourcePackageBuilder } from "./SourcePackageBuilder.js";
import type { InstallerPackageBuilder } from "./InstallerPackageBuilder.js";
import type { ChecksumGenerator } from "./ChecksumGenerator.js";


export class ReleaseAssetService {


    public constructor(

        private readonly source:

            SourcePackageBuilder,


        private readonly installer:

            InstallerPackageBuilder,


        private readonly checksum:

            ChecksumGenerator

    ){}




    public build(){



        const source =

            this.source.build();



        const installer =

            this.installer.build();



        const checksum =

            this.checksum.generate();





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
