import { IEvent } from "../contracts/IEvent.js";

export class RuntimeStoppedEvent implements IEvent {

    public readonly type = "RuntimeStopped";

    public readonly timestamp = new Date();

}
