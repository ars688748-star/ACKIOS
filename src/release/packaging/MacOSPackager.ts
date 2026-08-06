import type { PackageArtifact } from "./PackageArtifact.js";
import type { IPackager } from "./IPackager.js";

export class MacOSPackager implements IPackager {

    public readonly target = "macos";

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
