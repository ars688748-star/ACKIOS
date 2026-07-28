import { NodePlatformDetector } from "./detection/NodePlatformDetector.js";
import { PlatformInfo } from "./models/PlatformInfo.js";

export class PlatformService {

    private readonly detector = new NodePlatformDetector();

    public getInfo(): PlatformInfo {

        return this.detector.detect();

    }

}
