import { ICapabilityProvider } from "../contracts/ICapabilityProvider.js";
import { Capability } from "../models/Capability.js";
import { CapabilityKind } from "../enums/CapabilityKind.js";
import { OperatingSystem } from "../../enums/OperatingSystem.js";

export class PlatformCapabilityProvider implements ICapabilityProvider {


    public async getCapabilities(): Promise<Capability[]> {


        const capabilities: Capability[] = [];


        switch (process.platform) {


            case "win32":

                capabilities.push({

                    name: "Windows",

                    kind: CapabilityKind.Platform,

                    available: true

                });

                break;


            case "linux":

                capabilities.push({

                    name: "Linux",

                    kind: CapabilityKind.Platform,

                    available: true

                });

                break;


            case "darwin":

                capabilities.push({

                    name: "macOS",

                    kind: CapabilityKind.Platform,

                    available: true

                });

                break;


            default:

                capabilities.push({

                    name: OperatingSystem.Unknown,

                    kind: CapabilityKind.Platform,

                    available: false

                });

        }


        return capabilities;

    }

}
