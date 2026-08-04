import { PlatformArchitecture } from "./PlatformArchitecture.js";
import { PlatformKind } from "./PlatformKind.js";

export interface PlatformInfo {

    readonly platform: PlatformKind;

    readonly architecture: PlatformArchitecture;

    readonly nodeVersion: string;

}
