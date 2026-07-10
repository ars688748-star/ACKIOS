import { BrainService } from "../services/BrainService.js";
import { IEventManager } from "../contracts/IEventManager.js";
import { BrainEvent } from "./runtime/BrainEvent.js";
import { BrainEventBus } from "./runtime/BrainEventBus.js";

export class EventManager extends BrainService implements IEventManager {

    public readonly name = "EventManager";

    private readonly bus = new BrainEventBus();

    public publish(event: BrainEvent): void {
        this.bus.publish(event);
    }

    public getEvents(): readonly BrainEvent[] {
        return this.bus.getAll();
    }

    public clear(): void {
        this.bus.clear();
    }

}
