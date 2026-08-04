import { BrainEvent } from "./BrainEvent.js";

export class BrainEventBus {

    private readonly events: BrainEvent[] = [];

    public publish(event: BrainEvent): void {

        this.events.push(event);

    }

    public getAll(): readonly BrainEvent[] {

        return this.events;

    }

    public clear(): void {

        this.events.length = 0;

    }

}
