import fs from "node:fs";
import path from "node:path";

export class WorkspaceWriter {

    public save(root: string, workspace: unknown): void {

        const ackiDir = path.join(root, ".acki");

        if (!fs.existsSync(ackiDir)) {
            fs.mkdirSync(ackiDir, { recursive: true });
        }

        fs.writeFileSync(
            path.join(ackiDir, "workspace.json"),
            JSON.stringify(workspace, null, 2),
            "utf8"
        );
    }
}