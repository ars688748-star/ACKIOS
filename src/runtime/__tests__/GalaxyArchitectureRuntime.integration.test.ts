import { describe, expect, test } from "vitest";

import { ACKIOSContext } from "../ACKIOSContext.js";
import { ACKIOSServiceRegistryBuilder } from "../services/ACKIOSServiceRegistryBuilder.js";
import { GalaxyArchitectureProviderBridge } from "../../visualization/GalaxyArchitectureProviderBridge.js";


describe(
    "GalaxyArchitectureRuntime Integration",
    () => {


        test(
            "resolves galaxy architecture bridge from service registry",
            () => {


                const context =
                    new ACKIOSContext();


                new ACKIOSServiceRegistryBuilder()
                    .register(
                        context,
                        []
                    );


                const bridge =
                    context.services.resolve<GalaxyArchitectureProviderBridge>(
                        "galaxyArchitectureBridge"
                    );


                expect(
                    bridge
                ).toBeDefined();


                expect(
                    bridge instanceof GalaxyArchitectureProviderBridge
                ).toBe(true);


            }
        );


    }
);
