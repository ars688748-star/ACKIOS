import { readFile } from "node:fs/promises";
import { GuardianProfile } from "../models/GuardianProfile.js";

export class ProfileManager {

    public async load(
        profile:string="opensource"
    ):Promise<GuardianProfile>{

        const json = await readFile(

            `.private/guardian/profiles/${profile}.json`,

            "utf8"

        );

        return JSON.parse(json);

    }

}
