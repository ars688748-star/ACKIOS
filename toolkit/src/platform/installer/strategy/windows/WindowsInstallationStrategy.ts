import { InstallationContext } from "../../InstallationContext.js";
import { IInstallationStrategy } from "../IInstallationStrategy.js";
import { InstallationStrategyResult } from "../InstallationStrategyResult.js";


export class WindowsInstallationStrategy
    implements IInstallationStrategy {


    public canHandle(
        context: InstallationContext
    ): boolean {


        return (
            context.platform === "win32"
        );

    }



    public async install(
        context: InstallationContext
    ): Promise<InstallationStrategyResult> {


        return {

            success:
                true,


            strategy:
                "windows",


            message:
                `Windows installation strategy selected for ${context.platform}.`

        };

    }


}
