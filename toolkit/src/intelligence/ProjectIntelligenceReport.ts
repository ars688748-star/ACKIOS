import { ArchitectureReport } from "./architecture/index.js";
import { DependencyReport } from "./dependency/index.js";
import { RiskReport } from "./risk/index.js";
import { ProjectSummary } from "./ProjectSummary.js";
import { TechnologyDetector } from "./TechnologyDetector.js";

type TechnologyReport = ReturnType<TechnologyDetector["detect"]>;

export interface ProjectIntelligenceReport {

    summary: ProjectSummary;

    technologies: TechnologyReport;

    architecture: ArchitectureReport;

    dependencies: DependencyReport;

    risks: RiskReport;

}
