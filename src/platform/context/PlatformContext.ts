import { IPlatformContext } from "./IPlatformContext.js";

import { PlatformOrchestrator } from "../orchestrator/PlatformOrchestrator.js";

import { ACKIOSPlatformState } from "../state/ACKIOSPlatformState.js";

export class PlatformContext
implements IPlatformContext{

    public constructor(

        private readonly orchestrator:PlatformOrchestrator

    ){}

    public async state():Promise<ACKIOSPlatformState>{

        return await this.orchestrator.state();

    }

}
