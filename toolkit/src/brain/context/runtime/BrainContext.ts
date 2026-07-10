import { IBrainContext } from "./IBrainContext.js";

export class BrainContext implements IBrainContext {

    public readonly id = crypto.randomUUID();

    public readonly createdAt = new Date();

}
