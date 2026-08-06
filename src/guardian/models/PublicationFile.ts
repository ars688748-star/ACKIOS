import { PublicationKind } from "./PublicationKind.js";

export interface PublicationFile{

    path:string;

    kind:PublicationKind;

    reason:string;

}
