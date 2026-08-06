import type { PackageArtifact } from "./PackageArtifact.js";

export interface IPackager {

    target:string;

    package(): PackageArtifact;

}
