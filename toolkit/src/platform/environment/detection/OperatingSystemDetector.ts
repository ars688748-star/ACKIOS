import os from "node:os";
import { OperatingSystemInfo } from "./models/OperatingSystemInfo.js";


export class OperatingSystemDetector {


    public detect():
        OperatingSystemInfo {


        return {

            platform:
                process.platform,


            version:
                os.release(),


            architecture:
                process.arch

        };

    }

}
