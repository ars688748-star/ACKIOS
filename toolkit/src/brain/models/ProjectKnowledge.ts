import {
    AnalysisSnapshot,
    ArchitectureSnapshot,
    BrainEdge,
    BrainNode,
    CapabilityReference,
    RiskProfile,
    TechnologyProfile
} from "./index.js";

export interface ProjectKnowledge {
    nodes: BrainNode[];

    edges: BrainEdge[];

    technologies: TechnologyProfile[];

    risks: RiskProfile[];

    capabilities: CapabilityReference[];

    analyses: AnalysisSnapshot[];

    architecture?: ArchitectureSnapshot;
}

