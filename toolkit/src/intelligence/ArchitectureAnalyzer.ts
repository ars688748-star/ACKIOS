import {
    ArchitectureLayer,
    ArchitectureRecommendation,
    ArchitectureReport,
    ArchitectureType
} from "./architecture/index.js";

import { StructureScanner } from "./StructureScanner.js";

export class ArchitectureAnalyzer {

    async analyze(workspace: string): Promise<ArchitectureReport> {

        const scanner = new StructureScanner();

        const structure = scanner.scan(workspace);

        const layers: ArchitectureLayer[] = [];

        const recommendations: ArchitectureRecommendation[] = [];

        const hasDirectory = (...paths: string[]) =>
            paths.some(path => structure.directories.includes(path));

        const hasFile = (...paths: string[]) =>
            paths.some(path => structure.files.includes(path));

        if (hasDirectory("src/components","src/pages","src/app"))
            layers.push(ArchitectureLayer.Presentation);

        if (hasDirectory("src/services","src/use-cases","src/application"))
            layers.push(ArchitectureLayer.Application);

        if (hasDirectory("src/domain","src/entities","src/models"))
            layers.push(ArchitectureLayer.Domain);

        if (hasDirectory("src/infrastructure","src/repositories","src/database"))
            layers.push(ArchitectureLayer.Infrastructure);

        const hasTests = hasDirectory("tests","__tests__");

        if (hasTests)
            layers.push(ArchitectureLayer.Testing);

        const hasLint = hasFile(
            "eslint.config.js",
            ".eslintrc",
            ".eslintrc.json",
            ".eslintrc.js"
        );

        const hasFormatter = hasFile(
            ".prettierrc",
            ".prettierrc.json",
            ".prettierrc.js"
        );

        let architecture = ArchitectureType.Unknown;

        if (
            hasDirectory("packages") ||
            hasFile("turbo.json","pnpm-workspace.yaml")
        ) {

            architecture = ArchitectureType.Monorepo;

        } else if (

            hasDirectory("src/features") ||

            (
                hasDirectory("src/app") &&
                hasDirectory("src/shared")
            )

        ) {

            architecture = ArchitectureType.FeatureBased;

        } else if (

            layers.includes(ArchitectureLayer.Domain) &&
            layers.includes(ArchitectureLayer.Application) &&
            layers.includes(ArchitectureLayer.Infrastructure)

        ) {

            architecture = ArchitectureType.CleanArchitecture;

        } else if (layers.length >= 3) {

            architecture = ArchitectureType.Layered;

        }

        let score = layers.length * 15;

        if (!hasTests) {
            recommendations.push({
                severity: "warning",
                message: "No tests directory detected."
            });
        }

        if (!hasLint) {
            recommendations.push({
                severity: "warning",
                message: "ESLint configuration not found."
            });
        }

        if (!hasFormatter) {
            recommendations.push({
                severity: "info",
                message: "Formatter configuration not found."
            });
        }

        if (layers.length < 3) {
            recommendations.push({
                severity: "warning",
                message: "Project architecture appears incomplete."
            });
        }

        if (hasTests) score += 15;
        if (hasLint) score += 10;
        if (hasFormatter) score += 10;

        score = Math.min(score, 100);

        return {
            architecture,
            layers,
            hasTests,
            hasLint,
            hasFormatter,
            score,
            recommendations
        };

    }

}
