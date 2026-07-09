import { RuleCategory } from "./RuleCategory.js";

export interface RuleMetadata {
    id: string;
    name: string;
    category: RuleCategory;
    description: string;
    version: string;
    priority: number;
}