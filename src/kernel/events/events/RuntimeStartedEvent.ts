import { IEvent } from "../contracts/IEvent.js";

export class RuntimeStartedEvent implements IEvent {

    public readonly type = "RuntimeStarted";

    public readonly timestamp = new Date();

}
