import { ACKIOSContext } from "./ACKIOSContext.js";

export interface IRuntimeModule {

    initialize(context: ACKIOSContext): Promise<void>;

    start(): Promise<void>;

    stop(): Promise<void>;

    dispose(): Promise<void>;

}
