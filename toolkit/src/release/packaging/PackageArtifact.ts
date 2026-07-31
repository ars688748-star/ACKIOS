import type { PackageTarget } from "./PackageTarget.js";



export interface PackageArtifact {



    readonly target:

        PackageTarget;



    readonly name:

        string;



    readonly createdAt:

        Date;



}
