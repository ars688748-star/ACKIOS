import { WizardContext } from "./WizardContext.js";
import { WizardResult } from "./WizardResult.js";


export class FirstRunWizard {


    public async run(
        installationPath: string,
        version: string
    ): Promise<WizardResult> {


        const context: WizardContext =
        {
            installationPath,

            version,

            environmentDetected:
                true,

            adaptationCompleted:
                true,

            workspaceReady:
                true
        };


        return {
            success:
                true,

            message:
                "ACKIOS first run completed.",

            context
        };

    }


}
