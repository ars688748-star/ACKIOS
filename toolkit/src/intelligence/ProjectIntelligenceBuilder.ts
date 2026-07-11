import { ArchitectureAnalyzer } from "./ArchitectureAnalyzer.js";
import { DependencyAnalyzer } from "./DependencyAnalyzer.js";
import { ProjectIntelligenceEngine } from "./ProjectIntelligenceEngine.js";
import { RiskAnalyzer } from "./RiskAnalyzer.js";
import { StructureScanner } from "./StructureScanner.js";
import { TechnologyDetector } from "./TechnologyDetector.js";
import { JsonService } from "../services/JsonService.js";

export class ProjectIntelligenceBuilder {

    build(): ProjectIntelligenceEngine {

        return new ProjectIntelligenceEngine(
            new TechnologyDetector(),
            new ArchitectureAnalyzer(),
            new DependencyAnalyzer(),
            new RiskAnalyzer(),
            new StructureScanner(),
            new JsonService()
        );

    }

}
