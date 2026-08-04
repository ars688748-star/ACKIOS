import { BrainRelationType } from "./BrainRelationType.js";

export interface BrainEdge {
    id: string;

    from: string;

    to: string;

    relation: BrainRelationType;

    weight?: number;

    metadata?: Record<string, unknown>;
}

