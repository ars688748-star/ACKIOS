import { basename, join, normalize } from "node:path/posix";

export class DependencyResolver {

    public resolve(
        importPath: string,
        availableFiles: string[]
    ): string {

        if (!importPath.startsWith(".")) {

            return importPath;

        }

        const normalized =
            normalize(importPath);

        const fileName =
            basename(normalized);

        const candidates = [
            fileName,
            `${fileName}.ts`,
            `${fileName}.js`,
            `${fileName}.tsx`,
            join(fileName, "index.ts"),
            join(fileName, "index.js")
        ];

        const found =
            availableFiles.find(file =>
                candidates.some(candidate =>
                    file.endsWith(candidate)
                )
            );

        return found ?? importPath;

    }

}

