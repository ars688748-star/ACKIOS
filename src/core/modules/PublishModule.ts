import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";


import { PublishManager } from "../../publish/manager/PublishManager.js";
import { FolderProvider } from "../../publish/providers/folder/FolderProvider.js";

export class PublishModule implements IServiceModule {

    public register(
        container: ServiceContainer
    ): void {

        const manager =
            new PublishManager();

        manager.register(
            new FolderProvider()
        );


        container.register(
            "publishManager",
            manager
        );

    }

}

