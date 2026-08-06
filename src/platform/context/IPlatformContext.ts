import { ACKIOSPlatformState } from "../state/ACKIOSPlatformState.js";

export interface IPlatformContext{

    state():Promise<ACKIOSPlatformState>;

}
