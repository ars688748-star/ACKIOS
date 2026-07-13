import { ACKIOSContext } from "./ACKIOSContext.js";
import { IRuntimeModule } from "./IRuntimeModule.js";

export class ACKIOSRuntime {

    public constructor(
        public readonly context: ACKIOSContext,
        public readonly modules: IRuntimeModule[]
    ) {}

}
