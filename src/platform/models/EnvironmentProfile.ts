import { PlatformInfo } from "./PlatformInfo.js";
import { HardwareInfo } from "../hardware/models/HardwareInfo.js";

export interface EnvironmentProfile {

    platform: PlatformInfo;

    hardware: HardwareInfo;

    tools: string[];

    capabilities: string[];

}
