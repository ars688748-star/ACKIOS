import { BuildVerification } from "./BuildVerification.js";

import { PackageVerification } from "./PackageVerification.js";

import { InstallerVerification } from "./InstallerVerification.js";

import { DocumentationVerification } from "./DocumentationVerification.js";

import { VersionVerification } from "./VersionVerification.js";



export class ReleaseVerificationService {



    public verify(){



        const checks = [



            new BuildVerification().verify(),



            new PackageVerification().verify(),



            new InstallerVerification().verify(),



            new DocumentationVerification().verify(),



            new VersionVerification().verify()



        ];




        return {



            version:

                "1.0.0",



            checks,



            ready:

                checks.every(

                    item => item.passed

                )


        };


    }


}
