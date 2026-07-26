import { BootstrapContext } from "../models/BootstrapContext.js";

export interface IBootstrapRuntime {

    start(
        context: BootstrapContext
    ): Promise<boolean>;

}
