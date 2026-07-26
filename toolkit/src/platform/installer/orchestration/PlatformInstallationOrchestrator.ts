import { RuntimeEnvironment } from "../../environment/detection/models/RuntimeEnvironment.js";
import { InstallerEngine } from "../InstallerEngine.js";
import { InstallationResult } from "../InstallationResult.js";


export class PlatformInstallationOrchestrator {


    public constructor(
        private readonly installer:
            InstallerEngine
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



        return await this.installer.install(
            context
        );

    }


}
