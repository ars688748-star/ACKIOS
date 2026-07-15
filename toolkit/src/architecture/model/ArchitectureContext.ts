import type { IArchitectureModel } from "../contracts/IArchitectureModel.js";
import type { ArchitectureGraph } from "../graph/ArchitectureGraph.js";
import type { DependencyAnalysisResult } from "../analysis/DependencyAnalyzer.js";
import type { MetricsResult } from "../analysis/ArchitectureMetrics.js";

export interface ArchitectureContext {

    model?: IArchitectureModel;

    graph?: ArchitectureGraph;

    dependencies?: DependencyAnalysisResult;

    metrics?: MetricsResult;

}
