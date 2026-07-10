import { ICognitiveStage } from "../integration/ICognitiveStage.js";

export class ReflectionCognitiveStage implements ICognitiveStage{

    readonly name="Reflection";

    async execute(context:unknown):Promise<void>{

        void context;

    }

}
