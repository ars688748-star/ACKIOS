import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class CognitiveModuleLoader{

    load(modules:ICognitiveModule[]):ICognitiveModule[]{

        return [...modules];

    }

}
