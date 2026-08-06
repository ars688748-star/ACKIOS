import { ReleaseChecklistService } from "./ReleaseChecklistService.js";

import { RepositoryValidator } from "./RepositoryValidator.js";

import { BuildValidator } from "./BuildValidator.js";

import { DocumentationValidator } from "./DocumentationValidator.js";

import { InstallerValidator } from "./InstallerValidator.js";



export class ReleaseChecklistFactory {



    public static create(){


        return new ReleaseChecklistService(


            new RepositoryValidator(),


            new BuildValidator(),


            new DocumentationValidator(),


            new InstallerValidator()


        );


    }


}
