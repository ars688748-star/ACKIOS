import { promises as fs } from "node:fs";

export class PolicyEngine {

    public async execute(): Promise<void> {

        const config = JSON.parse(
            await fs.readFile(
                "D:\\ACKIOS\\.private\\guardian\\guardian.json",
                "utf8"
            )
        );

        console.log("[Guardian] Profile:", config.defaultProfile);

    }

}
