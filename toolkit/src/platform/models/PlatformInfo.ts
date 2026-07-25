import { OperatingSystem } from "../enums/OperatingSystem.js";

export interface PlatformInfo {

    operatingSystem: OperatingSystem;

    platform: string;

    version: string;

    architecture: string;

    hostname: string;

    runtimeVersion: string;

}
