import os from "node:os";

import { IPlatform } from "./contracts/IPlatform.js";
import { OperatingSystem } from "./enums/OperatingSystem.js";
import { PlatformInfo } from "./models/PlatformInfo.js";

export class NodePlatform implements IPlatform {

    public getInfo(): PlatformInfo {

        return {

            operatingSystem: this.getOperatingSystem(),

            platform: process.platform,

            version: os.release(),

            architecture: os.arch(),

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
