import { DocumentationGenerator } from "./DocumentationGenerator.js";

import { ArchitectureSummary } from "./ArchitectureSummary.js";

import { InstallationGuide } from "./InstallationGuide.js";



export class DocumentationService {



    public constructor(


        private readonly generator:

            DocumentationGenerator,


        private readonly architecture:

            ArchitectureSummary,


        private readonly installation:

            InstallationGuide


    ){}





    public generate(){


        return this.generator.generate([


            {


                title:

                    "Architecture",


                content:

                    this.architecture.generate()


            },


            {


                title:

                    "Installation",


                content:

                    this.installation.generate()


            }


        ]);


    }


}
