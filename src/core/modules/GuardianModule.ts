import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { Guardian } from "../../guardian/Guardian.js";
import { GuardianService } from "../../guardian/services/GuardianService.js";


export class GuardianModule implements IServiceModule {


    public register(
        container: ServiceContainer
    ): void {


        container.register(
            "guardian",
            new Guardian()
        );


        container.register(
            "guardianService",
            new GuardianService(

                container.resolve<Guardian>(
                    "guardian"
                )

            )
        );


    }

}
