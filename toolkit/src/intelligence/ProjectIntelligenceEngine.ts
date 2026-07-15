import { existsSync } from "node:fs";
import { join } from "node:path";

import { ArchitectureAnalyzer } from "./ArchitectureAnalyzer.js";
import { DependencyAnalyzer } from "./DependencyAnalyzer.js";
import { ProjectIntelligenceReport } from "./ProjectIntelligenceReport.js";
import { RiskAnalyzer } from "./RiskAnalyzer.js";
import { StructureScanner } from "./StructureScanner.js";
import { TechnologyDetector } from "./TechnologyDetector.js";
import { JsonService } from "../services/JsonService.js";

export class ProjectIntelligenceEngine {

    constructor(
        private readonly technologyDetector: TechnologyDetector,
        private readonly architectureAnalyzer: ArchitectureAnalyzer,
        private readonly dependencyAnalyzer: DependencyAnalyzer,
        private readonly riskAnalyzer: RiskAnalyzer,
        private readonly scanner: StructureScanner,
        private readonly jsonService: JsonService
    ) {}

    async analyze(workspace: string): Promise<ProjectIntelligenceReport> {

        const structure = this.scanner.scan(workspace);

        const packageJsonPath = join(workspace, "package.json");

        const packageJson = existsSync(packageJsonPath)
            ? this.jsonService.read<Record<string, unknown>>(packageJsonPath)
            : {};

        const technologies =
            this.technologyDetector.detect(
                packageJson,
                structure.files
            );

        const architecture =
            await this.architectureAnalyzer.analyze(workspace);

        const dependencies =
            this.dependencyAnalyzer.analyze(workspace);

        const risks =
            this.riskAnalyzer.analyze(architecture);

        const summary = {

            overallScore: Math.max(
                0,
                Math.round(
                    (architecture.score + risks.score) / 2
                )
            ),

            technologies: technologies.length,

            dependencies: dependencies.total,

            risks: risks.risks.length,

            architecture: architecture.architecture

        };

        return {

            summary,

            technologies,

            architecture,

            dependencies,

            risks

        };

    }

}

