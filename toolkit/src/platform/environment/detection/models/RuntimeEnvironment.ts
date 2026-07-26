import { OperatingSystemInfo } from "./OperatingSystemInfo.js";
import { HardwareInfo } from "./HardwareInfo.js";


export interface RuntimeEnvironment {

    os:
        OperatingSystemInfo;


    hardware:
        HardwareInfo;


    runtime:
        {

            nodeVersion:
                string;

        };

}
