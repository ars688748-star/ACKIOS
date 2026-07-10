import { BrainNodeType } from "./BrainNodeType.js";

export interface BrainNode {
    id: string;

    type: BrainNodeType;

    name: string;

    description?: string;

    metadata?: Record<string, unknown>;

    createdAt: Date;

    updatedAt: Date;
}

