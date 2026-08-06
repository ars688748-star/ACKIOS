import { NodePlatformDetector } from "./detection/NodePlatformDetector.js";
import { PlatformInfo } from "./models/PlatformInfo.js";

export class PlatformService {

    public constructor(

        private readonly detector: NodePlatformDetector

    ) {}

    public getInfo(): PlatformInfo {

        return this.detector.detect();

    }

}
