import { BuildVerification } from "./BuildVerification.js";

import { PackageVerification } from "./PackageVerification.js";

import { InstallerVerification } from "./InstallerVerification.js";

import { DocumentationVerification } from "./DocumentationVerification.js";

import { VersionVerification } from "./VersionVerification.js";



export class ReleaseVerificationService {



    public constructor(


        private readonly build:

            BuildVerification,


        private readonly pack:

            PackageVerification,


        private readonly installer:

            InstallerVerification,


        private readonly documentation:

            DocumentationVerification,


        private readonly version:

            VersionVerification


    ){}





    public verify(){



        const checks = [



            this.build.verify(),



            this.pack.verify(),



            this.installer.verify(),



            this.documentation.verify(),



            this.version.verify()



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
