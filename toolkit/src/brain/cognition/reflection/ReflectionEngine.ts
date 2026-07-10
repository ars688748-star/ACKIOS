import { ICognitiveContext } from "../interfaces/ICognitiveContext.js";
import { ICognitiveModule } from "../interfaces/ICognitiveModule.js";

export class ReflectionEngine implements ICognitiveModule {

    readonly name="ReflectionEngine";

    async initialize():Promise<void>{}

    async process(context:ICognitiveContext):Promise<void>{

        const execution=context.state.get("execution");

        context.state.set("reflection",{

            success:true,

            execution,

            reflectedAt:Date.now()

        });

    }

    async shutdown():Promise<void>{}

}
