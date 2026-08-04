import { CognitiveCapability } from "./CognitiveCapability.js";

export class CognitiveCapabilityRegistry{

    private readonly capabilities=new Map<string,CognitiveCapability>();

    register(capability:CognitiveCapability):void{

        this.capabilities.set(capability.id,capability);

    }

    all():readonly CognitiveCapability[]{

        return [...this.capabilities.values()];

    }

}
