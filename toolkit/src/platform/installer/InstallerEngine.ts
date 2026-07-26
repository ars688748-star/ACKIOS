import { InstallationContext } from "./InstallationContext.js";
import { InstallationResult } from "./InstallationResult.js";
import { InstallationValidator } from "./InstallationValidator.js";
import { InstallationStrategySelector } from "./strategy/InstallationStrategySelector.js";


export class InstallerEngine {


    public constructor(
        private readonly validator:
            InstallationValidator,

        private readonly selector?:
            InstallationStrategySelector
    ) {}



    public async install(
        context: InstallationContext
    ): Promise<InstallationResult> {


        context.status =
            "running";


        const valid =
            await this.validator.validate();



        if (!valid) {


            context.status =
                "failed";


            return {

                success: false,

                message:
                    "Environment validation failed.",

                context

            };

        }



        if (this.selector) {


            const strategy =
                this.selector.select(
                    context
                );



            if (!strategy) {


                context.status =
                    "failed";


                return {

                    success: false,

                    message:
                        "No installation strategy available.",

                    context

                };

            }



            const result =
                await strategy.install(
                    context
                );



            if (!result.success) {


                context.status =
                    "failed";


                return {

                    success: false,

                    message:
                        result.message ??
                        "Installation failed.",

                    context

                };

            }



            context.strategy =
                result.strategy;

        }



        context.status =
            "completed";


        context.workspaceCreated =
            true;



        return {

            success: true,

            message:
                "ACKIOS installation completed.",

            context

        };


    }


}
