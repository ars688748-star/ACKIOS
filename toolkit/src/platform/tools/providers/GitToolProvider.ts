import { ProcessToolProvider } from "./ProcessToolProvider.js";
import { ToolInfo } from "../models/ToolInfo.js";

export class GitToolProvider extends ProcessToolProvider {

    public async detect(): Promise<ToolInfo> {

        try {

            const version = await this.execute(
                "git",
                ["--version"]
            );

            return {
                name: "Git",
                available: true,
                version
            };

        }
        catch {

            return {
                name: "Git",
                available: false,
                version: ""
            };

        }

    }

}
