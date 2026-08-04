import { ICapabilityProvider } from "../contracts/ICapabilityProvider.js";
import { Capability } from "../models/Capability.js";
import { CapabilityKind } from "../enums/CapabilityKind.js";
import { IHardwareDetector } from "../../hardware/contracts/IHardwareDetector.js";


export class HardwareCapabilityProvider implements ICapabilityProvider {


    public constructor(
        private readonly hardwareDetector: IHardwareDetector
    ) {}


    public async getCapabilities(): Promise<Capability[]> {


        const hardware =
            await this.hardwareDetector.detect();


        const memoryGB =
            Math.round(
                hardware.memory.totalBytes / 1024 / 1024 / 1024
            );


        return [

            {
                name: "CPU",
                kind: CapabilityKind.Platform,
                available: hardware.cpu.cores > 0,
                version: hardware.cpu.model
            },


            {
                name: "Memory",
                kind: CapabilityKind.Platform,
                available: hardware.memory.totalBytes > 0,
                version: memoryGB + " GB"
            },


            {
                name: hardware.architecture,
                kind: CapabilityKind.Platform,
                available: true
            }

        ];

    }

}
