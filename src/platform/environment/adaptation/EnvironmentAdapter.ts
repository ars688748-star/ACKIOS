import { RuntimeEnvironment } from "../detection/models/RuntimeEnvironment.js";
import { AdaptationDecision } from "./AdaptationDecision.js";
import { RuntimeCompatibilityChecker } from "./RuntimeCompatibilityChecker.js";


export class EnvironmentAdapter {


    public constructor(
        private readonly compatibilityChecker:
            RuntimeCompatibilityChecker
    ) {}



    public adapt(
        environment: RuntimeEnvironment
    ):
        AdaptationDecision {


        const compatible =
            this.compatibilityChecker.check(
                environment
            );



        if (!compatible) {

            return {

                platform:
                    environment.os.platform,


                strategy:
                    "unsupported",


                packageManager:
                    "unknown",


                compatible: false

            };

        }



        return {

            platform:
                environment.os.platform,


            strategy:
                this.resolveStrategy(
                    environment
                ),


            packageManager:
                this.resolvePackageManager(
                    environment
                ),


            compatible: true

        };

    }



    private resolveStrategy(
        environment: RuntimeEnvironment
    ):
        string {


        switch (
            environment.os.platform
        ) {


            case "win32":

                return "WindowsRuntimeStrategy";


            case "linux":

                return "LinuxRuntimeStrategy";


            case "darwin":

                return "MacRuntimeStrategy";


            default:

                return "UnknownStrategy";

        }

    }



    private resolvePackageManager(
        environment: RuntimeEnvironment
    ):
        string {


        switch (
            environment.os.platform
        ) {


            case "win32":

                return "npm";


            case "linux":

                return "apt";


            case "darwin":

                return "brew";


            default:

                return "unknown";

        }

    }


}
