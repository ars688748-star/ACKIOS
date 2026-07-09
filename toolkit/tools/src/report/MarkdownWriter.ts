import fs from "node:fs";
import path from "node:path";

export class MarkdownWriter {

    public save(
        root: string,
        markdown: string
    ): void {

        const ackiDir =
            path.join(root, ".acki");

        if (!fs.existsSync(ackiDir)) {

            fs.mkdirSync(
                ackiDir,
                { recursive: true }
            );

        }

        fs.writeFileSync(

            path.join(
                ackiDir,
                "report.md"
            ),

            markdown,

            "utf8"

        );

    }

}
