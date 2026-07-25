import { ICapabilityProvider } from "./contracts/ICapabilityProvider.js";
import { Capability } from "./models/Capability.js";

export class CapabilityDiscoveryService {


    private readonly providers: ICapabilityProvider[] = [];


    public register(provider: ICapabilityProvider): void {

        this.providers.push(provider);

    }


    public async getCapabilities(): Promise<Capability[]> {


        const result: Capability[] = [];


        for (const provider of this.providers) {


            result.push(
                ...(await provider.getCapabilities())
            );


        }


        return result;

    }

}
