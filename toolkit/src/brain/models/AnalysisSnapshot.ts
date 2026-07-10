export interface AnalysisSnapshot {
    analyzer: string;

    timestamp: Date;

    version: string;

    metadata?: Record<string, unknown>;
}

