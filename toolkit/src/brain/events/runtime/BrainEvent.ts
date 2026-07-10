import { IBrainEvent } from "./IBrainEvent.js";

export class BrainEvent implements IBrainEvent {

    public readonly id = crypto.randomUUID();

    public readonly timestamp = new Date();

    public constructor(
        public readonly type: string
    ) {}

}
