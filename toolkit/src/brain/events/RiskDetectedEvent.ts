import { BrainEvent } from "./BrainEvent.js";
import { RiskProfile } from "../models/index.js";

export interface RiskDetectedEvent extends BrainEvent {
    risk: RiskProfile;
}


