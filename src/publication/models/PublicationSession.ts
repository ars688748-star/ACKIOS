import type { GuardianResult } from "../../guardian/models/GuardianResult.js";


export interface PublicationSession {


    provider:

        string;



    guardian:

        GuardianResult;



    createdAt:

        Date;



}
