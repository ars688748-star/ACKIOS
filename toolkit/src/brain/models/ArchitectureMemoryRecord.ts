export interface ArchitectureMemoryRecord {

    id: string;

    componentId: string;

    action: string;

    reason: string;

    author: string;

    timestamp: Date;

    metadata: Record<string, unknown>;

}
