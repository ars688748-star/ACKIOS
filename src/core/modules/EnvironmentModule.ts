import { IServiceModule } from "./IServiceModule.js";
import { ServiceContainer } from "../ServiceContainer.js";

import { EnvironmentScanner } from "../../platform/environment/EnvironmentScanner.js";
import { EnvironmentService } from "../../platform/environment/EnvironmentService.js";

import { CapabilityDiscoveryService } from "../../platform/capabilities/CapabilityDiscoveryService.js";


export class EnvironmentModule implements IServiceModule {


    public register(
        container: ServiceContainer
    ): void {


        const capabilityDiscovery =
            new CapabilityDiscoveryService();


        container.register(
            "capabilityDiscovery",
            capabilityDiscovery
        );


        const scanner =
            new EnvironmentScanner(
                container.resolve("platformDetector"),
                container.resolve("hardwareDetector"),
                container.resolve("toolDiscovery"),
                capabilityDiscovery
            );


        container.register(
            "environmentScanner",
            scanner
        );


        container.register(
            "environmentService",
            new EnvironmentService(
                scanner
            )
        );


    }


}
