import { PlatformInfo } from "../models/PlatformInfo.js";
import { Capability } from "../capabilities/models/Capability.js";
import { IPlatformLifecycle } from "./IPlatformLifecycle.js";

export interface IPlatformManager extends IPlatformLifecycle {

    getInfo(): PlatformInfo;

    getCapabilities(): Capability[];

}
