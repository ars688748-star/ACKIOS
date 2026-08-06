import { ReleasePackageService } from "./ReleasePackageService.js";
import { ReleasePackageBuilder } from "./ReleasePackageBuilder.js";
import { ChecksumGenerator } from "./ChecksumGenerator.js";


export class ReleasePackageFactory {


    public static create(){


        const builder =

            new ReleasePackageBuilder();



        const checksum =

            new ChecksumGenerator();



        return new ReleasePackageService(

            builder,

            checksum

        );


    }


}
