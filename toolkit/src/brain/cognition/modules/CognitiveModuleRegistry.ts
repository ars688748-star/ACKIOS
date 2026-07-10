import { CognitiveModuleDescriptor } from "./CognitiveModuleDescriptor.js";

export class CognitiveModuleRegistry{

    private readonly modules=new Map<string,CognitiveModuleDescriptor>();

    register(module:CognitiveModuleDescriptor):void{

        this.modules.set(module.id,module);

    }

    all():readonly CognitiveModuleDescriptor[]{

        return [...this.modules.values()];

    }

}
