import { OperatingSystem } from "../enums/OperatingSystem.js";

export interface PlatformInfo {

    operatingSystem: OperatingSystem;

    architecture: string;

    platform: string;

    nodeVersion: string;

}
