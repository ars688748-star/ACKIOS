import type { PackageArtifact } from "./PackageArtifact.js";
import type { IPackager } from "./IPackager.js";

export class LinuxPackager implements IPackager {

    public readonly target = "linux";

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
