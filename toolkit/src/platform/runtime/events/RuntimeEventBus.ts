import { RuntimeEvent } from "./RuntimeEvent.js";


export type RuntimeEventHandler =
    (
        event: RuntimeEvent
    ) => Promise<void>;


export class RuntimeEventBus {


    private readonly handlers:
        RuntimeEventHandler[] = [];



    public subscribe(
        handler: RuntimeEventHandler
    ): void {

        this.handlers.push(
            handler
        );

    }



    public async publish(
        event: RuntimeEvent
    ): Promise<void> {


        for (
            const handler of this.handlers
        ) {

            await handler(
                event
            );

        }


    }


}
