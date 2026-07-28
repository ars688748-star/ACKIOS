import { PlatformArchitecture } from "./PlatformArchitecture.js";
import { PlatformInfo } from "./PlatformInfo.js";
import { PlatformKind } from "./PlatformKind.js";

export class PlatformDetector {

    public static detect(): PlatformInfo {

        return {

            platform: this.detectPlatform(),
            architecture: this.detectArchitecture(),
            nodeVersion: process.version

        };

    }

    private static detectPlatform(): PlatformKind {

        switch (process.platform) {

            case "win32":
                return PlatformKind.Windows;

            case "linux":
                return PlatformKind.Linux;

            case "darwin":
                return PlatformKind.MacOS;

            default:
                return PlatformKind.Unknown;

        }

    }

    private static detectArchitecture(): PlatformArchitecture {

        switch (process.arch) {

            case "x64":
                return PlatformArchitecture.X64;

            case "arm64":
                return PlatformArchitecture.ARM64;

            case "ia32":
                return PlatformArchitecture.X86;

            default:
                return PlatformArchitecture.Unknown;

        }

    }

}
