import { IEvent } from "../contracts/IEvent.js";

export class ModuleLoadedEvent implements IEvent {

    public readonly type = "ModuleLoaded";

    public readonly timestamp = new Date();

    public constructor(
        public readonly moduleName: string
    ) {}

}
