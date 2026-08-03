import fs from "node:fs";
import path from "node:path";

export class RepositoryLocator {

    public find(startDirectory: string): string {

        let current = path.resolve(startDirectory);

        while (true) {

            if (fs.existsSync(path.join(current, ".git"))) {
                return current;
            }

            const parent = path.dirname(current);

            if (parent === current) {
                return startDirectory;
            }

            current = parent;

        }

    }

}
