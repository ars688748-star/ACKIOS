import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { HealthEngine } from "../../health/HealthEngine.js";

import { HealthEngineUniverseAdapter } from "../../visualization/universe/bridge/intelligence/sources/HealthEngineUniverseAdapter.js";


export class UniverseModule implements IServiceModule {


    public register(

        container: ServiceContainer

    ): void {


        const healthEngine =

            container.resolve<HealthEngine>(

                "healthEngine"

            );



        container.register(

            "universeHealthAdapter",

            new HealthEngineUniverseAdapter(

                healthEngine

            )

        );


    }


}
