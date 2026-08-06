import { promises as fs } from "node:fs";

export class IPAnalyzer {

    public async execute(files: string[] = []): Promise<void> {

        let scanned = 0;

        for (const file of files) {

            try {

                await fs.readFile(file, "utf8");

                scanned++;

            }
            catch {

                continue;

            }

        }

        console.log(`[Guardian] IP Analyzer scanned ${scanned} files.`);

    }

}
