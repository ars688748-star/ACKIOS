import type { PackageArtifact } from "./PackageArtifact.js";



export class MacOSPackager {



    public package():

        PackageArtifact {


        return {


            target:

                "macos",


            name:

                "ACKIOS-macOS",


            createdAt:

                new Date()


        };


    }


}
