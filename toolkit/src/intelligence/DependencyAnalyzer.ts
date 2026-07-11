import { existsSync } from "node:fs";
import { join } from "node:path";

import { JsonService } from "../services/JsonService.js";

import {
    Dependency,
    DependencyReport
} from "./dependency/index.js";

export class DependencyAnalyzer {

    constructor(
        private readonly json: JsonService
    ) {}

    public analyze(
        workspace: string
    ): DependencyReport {

        const packageJson =
            join(workspace, "package.json");

        if (!existsSync(packageJson)) {

            return {

                dependencies: [],

                total: 0

            };

        }

        const pkg = this.json.read<{

            dependencies?: Record<string, string>;

            devDependencies?: Record<string, string>;

        }>(packageJson);

        const dependencies: Dependency[] = [];

        for (const [name, version] of Object.entries(pkg.dependencies ?? {})) {

            dependencies.push({

                name,

                version,

                type: "dependency"

            });

        }

        for (const [name, version] of Object.entries(pkg.devDependencies ?? {})) {

            dependencies.push({

                name,

                version,

                type: "devDependency"

            });

        }

        return {

            dependencies,

            total: dependencies.length

        };

    }

}
