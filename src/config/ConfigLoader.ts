import fs from "node:fs";
import path from "node:path";

import {
    AckiConfig,
    DefaultAckiConfig
} from "./models/AckiConfig.js";

export class ConfigLoader {

    public load(
        root: string
    ): AckiConfig {

        const file =
            path.join(root, ".acki.json");

        if (!fs.existsSync(file)) {

            return DefaultAckiConfig;

        }

        try {

            const text =
                fs.readFileSync(file, "utf8")
                    .replace(/^\uFEFF/, "");

            const json =
                JSON.parse(text);

            return {

                ...DefaultAckiConfig,

                ...json,

                report: {

                    ...DefaultAckiConfig.report,

                    ...json.report

                },

                analysis: {

                    ...DefaultAckiConfig.analysis,

                    ...json.analysis

                }

            };

        }
        catch {

            return DefaultAckiConfig;

        }

    }

}
