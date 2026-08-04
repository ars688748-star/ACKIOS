import { PlatformDetector } from "./PlatformDetector.js";
import { PlatformInfo } from "./PlatformInfo.js";

export class PlatformRuntime {

    private readonly info: PlatformInfo =
        PlatformDetector.detect();

    public getInfo(): PlatformInfo {

        return this.info;

    }

    public get platform() {

        return this.info.platform;

    }

    public get architecture() {

        return this.info.architecture;

    }

    public get nodeVersion() {

        return this.info.nodeVersion;

    }

}

