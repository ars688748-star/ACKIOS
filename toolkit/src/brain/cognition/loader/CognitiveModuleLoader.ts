import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class CognitiveModuleLoader {

    load(modules: readonly ICognitiveModule[]): ICognitiveModule[] {

        return [...modules];

    }

}
