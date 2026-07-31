import type { PackageArtifact } from "./PackageArtifact.js";



export class WindowsPackager {



    public package():

        PackageArtifact {


        return {


            target:

                "windows",


            name:

                "ACKIOS-Windows",


            createdAt:

                new Date()


        };


    }


}
