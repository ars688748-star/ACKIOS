import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { HealthEngine } from "../../health/HealthEngine.js";


import { ArchitectureHealthCheck } from "../../health/ArchitectureHealthCheck.js";
import { ArchitectureHealthProvider } from "../../health/ArchitectureHealthProvider.js";
import { RuntimeHealthCheck } from "../../health/RuntimeHealthCheck.js";

import { ArchitectureInspector } from "../../inspector/services/ArchitectureInspector.js";


export class HealthModule implements IServiceModule {


    public register(
        container: ServiceContainer
    ): void {


        const provider =
            new ArchitectureHealthProvider(

                container.resolve<ArchitectureInspector>(
                    "architectureInspector"
                )

            );


        container.register(
            "architectureHealthProvider",
            provider
        );


        container.register(
            "architectureHealthCheck",
            new ArchitectureHealthCheck(
                provider
            )
        );


        container.register(
            "runtimeHealthCheck",
            new RuntimeHealthCheck()
        );



        container.register(
            "healthEngine",
            new HealthEngine([

                container.resolve<ArchitectureHealthCheck>(
                    "architectureHealthCheck"
                ),

                container.resolve<RuntimeHealthCheck>(
                    "runtimeHealthCheck"
                )

            ])
        );


    }

}

