import { IPlatform } from "./contracts/IPlatform.js";
import { NodePlatform } from "./NodePlatform.js";

export class PlatformService {

    private readonly platform: IPlatform =
        new NodePlatform();

    public getInfo() {

        return this.platform.getInfo();

    }

}
