import { dirname, join, normalize } from "node:path/posix";

export class ImportResolver {

    public resolve(
        sourceFile: string,
        importedPath: string
    ): string {

        if (
            importedPath.startsWith("./") ||
            importedPath.startsWith("../")
        ) {

            return normalize(
                join(
                    dirname(sourceFile),
                    importedPath
                )
            );

        }

        return importedPath;

    }

}
