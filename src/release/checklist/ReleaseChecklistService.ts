import type { ReleaseChecklist } from "./ReleaseChecklist.js";

import { RepositoryValidator } from "./RepositoryValidator.js";

import { BuildValidator } from "./BuildValidator.js";

import { DocumentationValidator } from "./DocumentationValidator.js";

import { InstallerValidator } from "./InstallerValidator.js";



export class ReleaseChecklistService {



    public constructor(

        private readonly repository:

            RepositoryValidator,


        private readonly build:

            BuildValidator,


        private readonly documentation:

            DocumentationValidator,


        private readonly installer:

            InstallerValidator

    ){}




    public validate():

        ReleaseChecklist {



        const items = [



            this.repository.validate(),



            this.build.validate(),



            this.documentation.validate(),



            this.installer.validate()



        ];





        return {



            version:

                "1.0.0",



            items,



            ready:

                items.every(

                    item => item.passed

                )


        };


    }


}
