import os from "node:os";
import { HardwareInfo } from "./models/HardwareInfo.js";


export class HardwareDetector {


    public detect():
        HardwareInfo {


        const totalMemory =
            os.totalmem();



        return {

            cpuCores:
                os.cpus().length,


            memoryGB:
                Math.round(
                    totalMemory /
                    1024 /
                    1024 /
                    1024
                ),


            architecture:
                process.arch,


            gpuAvailable:
                false

        };

    }

}
