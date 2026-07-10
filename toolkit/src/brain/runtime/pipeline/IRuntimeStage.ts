import { RuntimeContext } from "../context/RuntimeContext.js";

export interface IRuntimeStage {

    readonly name: string;

    execute(
        context: RuntimeContext
    ): Promise<RuntimeContext>;

}
