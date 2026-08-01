import { RuntimeStatus } from "./RuntimeStatus.js";

export class RuntimeBootstrap{

private status=RuntimeStatus.Created;

public getStatus(){

return this.status;

}

public async initialize(){

this.status=RuntimeStatus.Initializing;

}

public async start(){

this.status=RuntimeStatus.Running;

}

public async stop(){

this.status=RuntimeStatus.Stopped;

}

}
