import { IBrainSession } from "./IBrainSession.js";

export class BrainSession implements IBrainSession {

    public readonly id = crypto.randomUUID();

    public readonly createdAt = new Date();

}
