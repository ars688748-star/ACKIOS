import { readFile } from "node:fs/promises";

import { ClassificationRule } from "../models/ClassificationRule.js";
import { ProfileManager } from "./ProfileManager.js";

export class RuleLoader {

    private readonly profiles =
        new ProfileManager();

    public async load(
        profile:string="opensource"
    ):Promise<ClassificationRule[]>{

        const active =
            await this.profiles.load(profile);

        const json =
            await readFile(

                `.private/guardian/rules/${active.rules}`,

                "utf8"

            );

        return JSON.parse(json);

    }

}
