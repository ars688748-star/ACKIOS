import { IBootstrapRuntime } from "../contracts/IBootstrapRuntime.js";
import { BootstrapContext } from "../models/BootstrapContext.js";

import { FirstRunCoordinator } from "../../runtime/FirstRunCoordinator.js";


export class BootstrapRuntime implements IBootstrapRuntime {


    public constructor(
        private readonly firstRunCoordinator: FirstRunCoordinator
    ) {}


    public async start(
        context: BootstrapContext
    ): Promise<boolean> {


        if (!context.installed) {

            return false;

        }


        const initialized =
            await this.firstRunCoordinator.run(
                context.workspacePath,
                context.username
            );


        if (!initialized) {

            return false;

        }


        context.initialized = true;


        return true;

    }


}
