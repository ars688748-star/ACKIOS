import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { Guardian } from "../../guardian/Guardian.js";
import { PublishManager } from "../../publish/manager/PublishManager.js";
import { PublicationCenter } from "../../publication/services/PublicationCenter.js";

export class PublicationModule implements IServiceModule {

    public register(
        container: ServiceContainer
    ): void {

        const guardian =
            container.resolve<Guardian>("guardian");

        const publishManager =
            container.resolve<PublishManager>("publishManager");

        container.register(

            "publicationCenter",

            new PublicationCenter(

                guardian,

                publishManager

            )

        );

    }

}
