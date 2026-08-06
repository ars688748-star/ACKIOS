import { PlatformRuntime } from "../runtime/PlatformRuntime.js";
import { ACKIOSPlatformState } from "../state/ACKIOSPlatformState.js";

export class PlatformOrchestrator{

    public constructor(

        private readonly runtime:PlatformRuntime

    ){}

    public async state():Promise<ACKIOSPlatformState>{

        return await this.runtime.state();

    }

}
