import { BrainEvent } from "./BrainEvent.js";
import { ProjectKnowledge } from "../models/index.js";

export interface KnowledgeUpdatedEvent extends BrainEvent {
    knowledge: ProjectKnowledge;
}


