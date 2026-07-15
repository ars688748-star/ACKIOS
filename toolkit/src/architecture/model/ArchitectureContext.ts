import type { IArchitectureModel } from "../contracts/IArchitectureModel.js";
import type { ArchitectureGraph } from "../graph/ArchitectureGraph.js";
import type { DependencyAnalysisResult } from "../analysis/DependencyAnalyzer.js";
import type { MetricsResult } from "../analysis/ArchitectureMetrics.js";
import type { SourceFile } from "../source/SourceFile.js";

export interface ArchitectureContext {

    root?: string;

    paths?: readonly string[];

    sources?: readonly SourceFile[];

    model?: IArchitectureModel;

    graph?: ArchitectureGraph;

    dependencies?: DependencyAnalysisResult;

    metrics?: MetricsResult;

    completedStages?: readonly string[];

}
