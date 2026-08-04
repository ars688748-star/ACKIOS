import { DocumentationGenerator } from "./DocumentationGenerator.js";

import { ArchitectureSummary } from "./ArchitectureSummary.js";

import { InstallationGuide } from "./InstallationGuide.js";



export class DocumentationService {



    private readonly generator =

        new DocumentationGenerator();





    public generate(){


        return this.generator.generate([


            {


                title:

                    "Architecture",


                content:

                    new ArchitectureSummary().generate()


            },


            {


                title:

                    "Installation",


                content:

                    new InstallationGuide().generate()


            }


        ]);


    }


}
