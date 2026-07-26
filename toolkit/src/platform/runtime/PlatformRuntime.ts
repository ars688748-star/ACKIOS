import { IPlatformRuntime } from "./IPlatformRuntime.js";
import { PlatformRuntimeContext } from "./PlatformRuntimeContext.js";
import { BootstrapRuntime } from "../bootstrap/services/BootstrapRuntime.js";


export class PlatformRuntime implements IPlatformRuntime {


    public constructor(
        private readonly bootstrapRuntime: BootstrapRuntime
    ) {}


    public async start(
        context: PlatformRuntimeContext
    ): Promise<boolean> {


        if (!context.installed) {

            return false;

        }


        const result =
            await this.bootstrapRuntime.start({

                workspacePath: context.workspacePath,

                username: context.username,

                installed: context.installed,

                initialized: false

            });


        if (!result) {

            return false;

        }


        context.ready = true;


        return true;

    }

}
