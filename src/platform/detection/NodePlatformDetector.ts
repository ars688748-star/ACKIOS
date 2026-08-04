import os from "node:os";

import { IPlatformDetector } from "../contracts/IPlatformDetector.js";
import { PlatformInfo } from "../models/PlatformInfo.js";
import { OperatingSystem } from "../enums/OperatingSystem.js";

export class NodePlatformDetector implements IPlatformDetector {

    public detect(): PlatformInfo {

        return {

            operatingSystem: this.getOperatingSystem(),

            platform: process.platform,

            version: os.release(),

            architecture: process.arch,

            hostname: os.hostname(),

            runtimeVersion: process.version

        };

    }

    private getOperatingSystem(): OperatingSystem {

        switch (process.platform) {

            case "win32":
                return OperatingSystem.Windows;

            case "linux":
                return OperatingSystem.Linux;

            case "darwin":
                return OperatingSystem.MacOS;

            default:
                return OperatingSystem.Unknown;

        }

    }

}
