import { IPlatformRuntime } from "./IPlatformRuntime.js";
import { PlatformRuntimeContext } from "./PlatformRuntimeContext.js";

import { IBootstrapRuntime } from "../bootstrap/contracts/IBootstrapRuntime.js";

import { PlatformStateBuilder } from "../state/PlatformStateBuilder.js";
import { ACKIOSPlatformState } from "../state/ACKIOSPlatformState.js";

export class PlatformRuntime
implements IPlatformRuntime{

    public constructor(

        private readonly bootstrap:IBootstrapRuntime,

        private readonly builder =
            new PlatformStateBuilder()

    ){}

    public async start(
        context:PlatformRuntimeContext
    ):Promise<boolean>{

        if(!context.installed){

            return false;

        }

        const started =
            await this.bootstrap.start({

                workspacePath:
                    context.workspacePath,

                username:
                    context.username,

                installed:
                    context.installed,

                initialized:false

            });

        if(started){

            context.ready=true;

        }

        return started;

    }

    public async state():Promise<ACKIOSPlatformState>{

        return await this.builder.build();

    }

}
