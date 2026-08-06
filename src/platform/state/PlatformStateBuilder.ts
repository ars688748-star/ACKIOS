import { ACKIOSPlatformState } from "./ACKIOSPlatformState.js";

export class PlatformStateBuilder{

    public async build():Promise<ACKIOSPlatformState>{

        return{

            runtimeStatus:"OK",

            workflowStatus:"READY",

            repositoryStatus:"SAFE",

            healthStatus:"OK"

        };

    }

}
