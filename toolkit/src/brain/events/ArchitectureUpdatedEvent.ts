import { BrainEvent } from "./BrainEvent.js";
import { ArchitectureSnapshot } from "../models/index.js";

export interface ArchitectureUpdatedEvent extends BrainEvent {
    architecture: ArchitectureSnapshot;
}


