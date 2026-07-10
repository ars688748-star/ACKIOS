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

    private readonly technologyDetector = new TechnologyDetector();

    private readonly architectureAnalyzer = new ArchitectureAnalyzer();

    private readonly dependencyAnalyzer = new DependencyAnalyzer();

    private readonly riskAnalyzer = new RiskAnalyzer();

    private readonly scanner = new StructureScanner();

    async analyze(workspace: string): Promise<ProjectIntelligenceReport> {

        const structure = this.scanner.scan(workspace);

        const packageJsonPath = join(workspace, "package.json");

        const packageJson = existsSync(packageJsonPath)
            ? new JsonService().read(packageJsonPath)
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


