import { BrainEvent } from "./BrainEvent.js";
import { TechnologyProfile } from "../models/index.js";

export interface TechnologyDetectedEvent extends BrainEvent {
    technology: TechnologyProfile;
}


