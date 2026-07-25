import { PlatformInfo } from "../models/PlatformInfo.js";

export interface IPlatformDetector {

    detect(): Promise<PlatformInfo>;

}
