import type { ReleaseChecklist } from "./ReleaseChecklist.js";

import { RepositoryValidator } from "./RepositoryValidator.js";

import { BuildValidator } from "./BuildValidator.js";

import { DocumentationValidator } from "./DocumentationValidator.js";

import { InstallerValidator } from "./InstallerValidator.js";



export class ReleaseChecklistService {



    public validate():

        ReleaseChecklist {



        const items = [



            new RepositoryValidator().validate(),



            new BuildValidator().validate(),



            new DocumentationValidator().validate(),



            new InstallerValidator().validate()



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
