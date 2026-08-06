import { DocumentationService } from "./DocumentationService.js";

import { DocumentationGenerator } from "./DocumentationGenerator.js";

import { ArchitectureSummary } from "./ArchitectureSummary.js";

import { InstallationGuide } from "./InstallationGuide.js";



export class DocumentationFactory {



    public static create(){


        return new DocumentationService(


            new DocumentationGenerator(),


            new ArchitectureSummary(),


            new InstallationGuide()


        );


    }


}
