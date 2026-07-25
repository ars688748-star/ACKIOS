import { InstallationContext } from "./InstallationContext.js";
import { InstallationResult } from "./InstallationResult.js";
import { InstallationValidator } from "./InstallationValidator.js";


export class InstallerEngine {


    public constructor(
        private readonly validator: InstallationValidator
    ) {}


    public async install(
        context: InstallationContext
    ): Promise<InstallationResult> {


        context.status = "running";


        const valid =
            await this.validator.validate();


        if (!valid) {

            context.status = "failed";

            return {
                success: false,
                message: "Environment validation failed.",
                context
            };

        }


        context.status = "completed";
        context.workspaceCreated = true;


        return {
            success: true,
            message: "ACKIOS installation completed.",
            context
        };

    }

}
