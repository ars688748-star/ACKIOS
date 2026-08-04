import { KnowledgeCategory } from "../knowledge/KnowledgeCategory.js";
import { BrainNodeType } from "./BrainNodeType.js";

export interface BrainNode {

    id: string;

    type: BrainNodeType;

    name: string;

    description?: string;

    category?: KnowledgeCategory;

    metadata?: Record<string, unknown>;

    createdAt: Date;

    updatedAt: Date;

}
