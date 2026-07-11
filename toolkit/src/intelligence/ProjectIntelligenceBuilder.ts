import { ArchitectureAnalyzer } from "./ArchitectureAnalyzer.js";
import { DependencyAnalyzer } from "./DependencyAnalyzer.js";
import { ProjectIntelligenceEngine } from "./ProjectIntelligenceEngine.js";
import { RiskAnalyzer } from "./RiskAnalyzer.js";
import { StructureScanner } from "./StructureScanner.js";
import { TechnologyDetector } from "./TechnologyDetector.js";
import { JsonService } from "../services/JsonService.js";

export class ProjectIntelligenceBuilder {

    build(): ProjectIntelligenceEngine {

        const scanner = new StructureScanner();
        const json = new JsonService();

        return new ProjectIntelligenceEngine(
            new TechnologyDetector(),
            new ArchitectureAnalyzer(scanner),
            new DependencyAnalyzer(json),
            new RiskAnalyzer(),
            scanner,
            json
        );

    }

}
