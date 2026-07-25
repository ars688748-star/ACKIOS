import { IEvent } from "../contracts/IEvent.js";
import { IEventHandler } from "../contracts/IEventHandler.js";

export class EventBus {

    private readonly handlers =
        new Map<string, IEventHandler[]>();

    public subscribe<TEvent extends IEvent>(
        eventType: string,
        handler: IEventHandler<TEvent>
    ): void {

        const handlers =
            this.handlers.get(eventType) ?? [];

        handlers.push(handler as IEventHandler);

        this.handlers.set(eventType, handlers);

    }

    public async publish(event: IEvent): Promise<void> {

        const handlers =
            this.handlers.get(event.type) ?? [];

        for (const handler of handlers) {

            await handler.handle(event);

        }

    }

}
