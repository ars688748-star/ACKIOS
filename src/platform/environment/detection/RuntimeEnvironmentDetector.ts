import { RuntimeEnvironment } from "./models/RuntimeEnvironment.js";
import { OperatingSystemDetector } from "./OperatingSystemDetector.js";
import { HardwareDetector } from "./HardwareDetector.js";


export class RuntimeEnvironmentDetector {


    public constructor(
        private readonly osDetector:
            OperatingSystemDetector,

        private readonly hardwareDetector:
            HardwareDetector
    ) {}



    public detect():
        RuntimeEnvironment {


        return {

            os:
                this.osDetector.detect(),


            hardware:
                this.hardwareDetector.detect(),


            runtime:
            {

                nodeVersion:
                    process.version

            }

        };

    }

}
