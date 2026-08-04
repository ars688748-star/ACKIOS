import os from "node:os";

import { IHardwareDetector } from "../contracts/IHardwareDetector.js";
import { HardwareInfo } from "../models/HardwareInfo.js";

export class NodeHardwareDetector implements IHardwareDetector {

    public async detect(): Promise<HardwareInfo> {

        const cpus = os.cpus();

        return {

            cpu: {

                model: cpus[0]?.model ?? "unknown",

                cores: cpus.length,

                threads: cpus.length

            },

            memory: {

                totalBytes: os.totalmem()

            },

            architecture: os.arch(),

            gpu: []

        };

    }

}
