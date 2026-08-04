import type { PackageArtifact } from "./PackageArtifact.js";



export class LinuxPackager {



    public package():

        PackageArtifact {


        return {


            target:

                "linux",


            name:

                "ACKIOS-Linux",


            createdAt:

                new Date()


        };


    }


}
