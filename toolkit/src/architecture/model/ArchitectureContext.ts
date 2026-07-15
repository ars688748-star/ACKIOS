import type { IArchitectureModel } from "../contracts/IArchitectureModel.js";
import type { DependencyAnalysisResult } from "../analysis/DependencyAnalyzer.js";
import type { MetricsResult } from "../analysis/ArchitectureMetrics.js";
import type { ArchitectureGraph } from "../graph/ArchitectureGraph.js";
import type { ArchitectureNode } from "./ArchitectureNode.js";
import type { SourceFile } from "../source/SourceFile.js";
import type { ArchitectureViolation } from "./ArchitectureViolation.js";

export interface ArchitectureContext {

    root?: string;

    nodes?: readonly ArchitectureNode[];

    paths?: readonly string[];

    availableFiles?: readonly string[];

    sources?: readonly SourceFile[];

    model?: IArchitectureModel;

    graph?: ArchitectureGraph;

    dependencies?: DependencyAnalysisResult;

    metrics?: MetricsResult;

    violations?: readonly ArchitectureViolation[];

    completedStages?: readonly string[];

}
