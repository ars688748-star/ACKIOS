import { ICapabilityProvider } from "../contracts/ICapabilityProvider.js";
import { Capability } from "../models/Capability.js";
import { CapabilityKind } from "../enums/CapabilityKind.js";


export class RuntimeCapabilityProvider implements ICapabilityProvider {


    public async getCapabilities(): Promise<Capability[]> {


        return [

            {

                name: "Node.js",

                kind: CapabilityKind.Runtime,

                available: true,

                version: process.version

            }

        ];

    }

}
