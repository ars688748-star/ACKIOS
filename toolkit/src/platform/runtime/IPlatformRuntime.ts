import { PlatformRuntimeContext } from "./PlatformRuntimeContext.js";


export interface IPlatformRuntime {

    start(
        context: PlatformRuntimeContext
    ): Promise<boolean>;

}
