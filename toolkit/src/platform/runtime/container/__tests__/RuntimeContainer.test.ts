import { describe, expect, it } from "vitest";
import { RuntimeContainer } from "../RuntimeContainer.js";


describe(
    "RuntimeContainer",
    () => {


        it(
            "provides runtime services",
            () => {


                const services =
                {

                    platformRuntime:
                    {} as any,


                    stateManager:
                    {} as any,


                    eventBus:
                    {} as any

                };


                const container =
                    new RuntimeContainer(
                        services
                    );


                expect(
                    container.getServices()
                )
                .toBe(
                    services
                );


                expect(
                    container.getPlatformRuntime()
                )
                .toBe(
                    services.platformRuntime
                );


                expect(
                    container.getStateManager()
                )
                .toBe(
                    services.stateManager
                );


                expect(
                    container.getEventBus()
                )
                .toBe(
                    services.eventBus
                );


            }
        );


    }
);
