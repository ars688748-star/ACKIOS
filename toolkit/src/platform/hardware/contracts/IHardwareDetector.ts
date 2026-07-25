import { HardwareInfo } from "../models/HardwareInfo.js";

export interface IHardwareDetector {

    detect(): Promise<HardwareInfo>;

}
