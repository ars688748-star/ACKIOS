import { ReleaseVerificationService } from "./ReleaseVerificationService.js";

import { BuildVerification } from "./BuildVerification.js";

import { PackageVerification } from "./PackageVerification.js";

import { InstallerVerification } from "./InstallerVerification.js";

import { DocumentationVerification } from "./DocumentationVerification.js";

import { VersionVerification } from "./VersionVerification.js";



export class ReleaseVerificationFactory {



    public static create(){


        return new ReleaseVerificationService(


            new BuildVerification(),


            new PackageVerification(),


            new InstallerVerification(),


            new DocumentationVerification(),


            new VersionVerification()


        );


    }


}
