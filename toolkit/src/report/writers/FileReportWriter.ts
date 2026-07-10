import fs from "node:fs/promises";
import path from "node:path";

import { ReportWriter } from "./ReportWriter.js";

export class FileReportWriter
    implements ReportWriter {

    public async write(
        output: string,
        content: string
    ): Promise<void> {

        await fs.mkdir(
            path.dirname(output),
            {
                recursive: true
            }
        );

        await fs.writeFile(
            output,
            content,
            "utf8"
        );

    }

}
