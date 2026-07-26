import { RuntimeEnvironment } from "../detection/models/RuntimeEnvironment.js";


export class RuntimeCompatibilityChecker {


    public check(
        environment: RuntimeEnvironment
    ): boolean {


        const supportedPlatforms =
        [
            "win32",
            "linux",
            "darwin"
        ];


        if (
            !supportedPlatforms.includes(
                environment.os.platform
            )
        ) {

            return false;

        }


        const supportedArchitectures =
        [
            "x64",
            "arm64"
        ];


        if (
            !supportedArchitectures.includes(
                environment.hardware.architecture
            )
        ) {

            return false;

        }


        if (
            !environment.runtime.nodeVersion
        ) {

            return false;

        }


        return true;

    }


}
