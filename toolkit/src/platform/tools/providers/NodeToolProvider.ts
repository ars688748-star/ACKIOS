import { ProcessToolProvider } from "./ProcessToolProvider.js";
import { ToolInfo } from "../models/ToolInfo.js";

export class NodeToolProvider extends ProcessToolProvider {

    public async detect(): Promise<ToolInfo> {

        return {

            name: "Node.js",

            available: true,

            version: process.version

        };

    }

}
