import { BrainEvent } from "./BrainEvent.js";
import { AnalysisSnapshot } from "../models/index.js";

export interface AnalysisCompletedEvent extends BrainEvent {
    analysis: AnalysisSnapshot;
}


