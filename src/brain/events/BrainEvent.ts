import { BrainEventType } from "./BrainEventType.js";

export interface BrainEvent {
    id: string;

    type: BrainEventType;

    timestamp: Date;
}


