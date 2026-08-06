import type { PackageArtifact } from "./PackageArtifact.js";
import type { IPackager } from "./IPackager.js";

export class WindowsPackager implements IPackager {

    public readonly target = "windows";

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
