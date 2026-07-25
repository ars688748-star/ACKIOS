import { PlatformInfo } from "../models/PlatformInfo.js";
import { Capability } from "../capabilities/models/Capability.js";

export interface IPlatformManager {

    getInfo(): PlatformInfo;

    getCapabilities(): Capability[];

}
