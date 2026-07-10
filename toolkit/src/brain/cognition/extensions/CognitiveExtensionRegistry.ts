import { CognitiveExtension } from "./CognitiveExtension.js";

export class CognitiveExtensionRegistry{

    private readonly extensions:CognitiveExtension[]=[];

    register(extension:CognitiveExtension):void{

        this.extensions.push(extension);

    }

    all():readonly CognitiveExtension[]{

        return this.extensions;

    }

}
