import { CognitiveEvent } from "./CognitiveEvent.js";

export class CognitiveEventBus {

    private readonly events: CognitiveEvent[] = [];

    publish(event: CognitiveEvent): void {

        this.events.push(event);

    }

    all(): readonly CognitiveEvent[] {

        return this.events;

    }

    clear(): void {

        this.events.length = 0;

    }

}
