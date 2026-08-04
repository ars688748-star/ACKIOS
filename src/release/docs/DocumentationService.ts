import type { UserGuide } from "./UserGuide.js";

import type { InstallationGuide } from "./InstallationGuide.js";

import type { SystemRequirements } from "./SystemRequirements.js";

import type { FAQDocument } from "./FAQDocument.js";



export class DocumentationService {



    public generateUserGuide():

        UserGuide {


        return {


            title:

                "ACKIOS User Guide",


            sections:


                [


                    "Introduction",


                    "Installation",


                    "First Start",


                    "Working With ACKIOS"


                ]


        };


    }





    public generateInstallation():

        InstallationGuide {


        return {


            platforms:


                [


                    "Windows",


                    "Linux",


                    "macOS"


                ],



            steps:


                [


                    "Download",


                    "Install",


                    "Launch"


                ]


        };


    }





    public generateRequirements():

        SystemRequirements {


        return {


            operatingSystems:


                [


                    "Windows",


                    "Linux",


                    "macOS"


                ],



            minimumMemory:

                "8 GB RAM",



            minimumStorage:

                "5 GB"


        };


    }





    public generateFAQ():

        FAQDocument {


        return {


            questions:


                [


                    "What is ACKIOS?",


                    "How to install ACKIOS?",


                    "How to update ACKIOS?"


                ]


        };


    }


}
