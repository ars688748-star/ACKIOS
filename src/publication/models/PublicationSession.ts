import { GuardianResult } from "../../guardian/models/GuardianResult.js";

export interface PublicationSession {

    guardian: GuardianResult;

    provider: string;

    createdAt: Date;

}
