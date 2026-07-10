import { BrainEvent } from "./BrainEvent.js";
import { ProjectContext } from "../models/index.js";

export interface ProjectLoadedEvent extends BrainEvent {
    project: ProjectContext;
}


