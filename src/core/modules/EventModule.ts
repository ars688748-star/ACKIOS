import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";
import { EventBus } from "../../kernel/events/core/EventBus.js";

export class EventModule implements IServiceModule {

    public register(container: ServiceContainer): void {

        container.register(
            "eventBus",
            new EventBus()
        );

    }

}
