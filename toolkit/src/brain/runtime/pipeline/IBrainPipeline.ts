import { BrainContext } from "../../context/runtime/BrainContext.js";

export interface IBrainPipeline {

    execute(context: BrainContext): Promise<void>;

}
