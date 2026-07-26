import { RuntimeEnvironment } from "../../environment/detection/models/RuntimeEnvironment.js";
import { InstallerEngine } from "../InstallerEngine.js";
import { InstallationResult } from "../InstallationResult.js";
import { RuntimeStateManager } from "../../runtime/state/RuntimeStateManager.js";


export class PlatformInstallationOrchestrator {


    public constructor(
        private readonly installer:
            InstallerEngine,

        private readonly stateManager:
            RuntimeStateManager
    ) {}



    public async install(
        environment:
            RuntimeEnvironment,

        installPath:
            string,

        version:
            string
    ):
        Promise<InstallationResult> {



        const context =
        {

            installPath,

            version,


            platform:
                environment.os.platform,


            workspaceCreated:
                false,


            status:
                "pending" as const

        };



        const result =
            await this.installer.install(
                context
            );



        if (result.success) {


            await this.stateManager.save({

                initialized:
                    false,

                installed:
                    true,

                workspaceReady:
                    true,

                ready:
                    true,

                lastStartTime:
                    new Date().toISOString()

            });

        }



        return result;

    }


}
