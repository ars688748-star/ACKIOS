import { ICapabilityProvider } from "../contracts/ICapabilityProvider.js";
import { Capability } from "../models/Capability.js";
import { CapabilityKind } from "../enums/CapabilityKind.js";
import { ToolDiscoveryService } from "../../tools/ToolDiscoveryService.js";


export class ToolCapabilityProvider implements ICapabilityProvider {


    public constructor(
        private readonly toolDiscovery: ToolDiscoveryService
    ) {}


    public async getCapabilities(): Promise<Capability[]> {


        const tools =
            await this.toolDiscovery.detectAll();


        return tools.map(tool => ({

            name: tool.name,

            kind: CapabilityKind.Tool,

            available: tool.available,

            version: tool.version

        }));


    }

}
